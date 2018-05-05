const FacturasArr = require('./ListXML')
const { meses, unidades, abreviaciones } = require('./const.js')
const _ = require('lodash');
const porPoquito = require('./utils/porPoquito')
//Vamos a iterar por todas las facturas, van a haber varias etapas de manejo y control:

// semestre devuelve el semestre en el que se está trabajando con SEMADET
const semestre = (inicio = 1) => {
  if (Array.isArray(inicio)) {
    if (inicio.length === 6) {
      customArr = []
      inicio.forEach( numero => {
        customArr[meses[numero]] = { mes: meses[numero], materiales:[], totalResiduosMensuales: 0 }
      })
      return customArr
    } else {
      throw new Error("No se puede calcular un semestre con menos o más de seis meses")
    }
  }
  else if (inicio === 1 || inicio === 2) {
    switch (inicio) {
      case 1:
        return semestre([3,4,5,6,7,8])
        break;
      default:
        return semestre([9,10,11,0,1,2])
    }
  }
  else {
    throw new Error("Necesitas usar los parámetros 1 o 2 o un Array con el semestre deseado")
  }
}

let InformeSEMADET = {

}
let ArrRFC = {}
let conceptosArr = []

FacturasArr.forEach( F => {
  let { receptor, emisor, conceptos, fecha, folio } = F
  let ReceptorRFC = receptor.rfc
  ReceptorRFC = ReceptorRFC || receptor.RFC
  if (!ReceptorRFC) {
    throw new Error('Tiene que haber un receptor')
  }
  if (receptor.nombre === 'VENTA AL PUBLICO') {
    return null
  }

  conceptos.forEach(  C => {
    let { cantidad, unidad, descripcion, noIdentificacion } = C
    let { nombre } = receptor
    let { mes_nombre } = fecha
    conceptosArr.includes(descripcion) ? null : conceptosArr.push(descripcion)
    if (!ArrRFC[ReceptorRFC]) {
      let Empresa = {
        nombre,
        rfc: ReceptorRFC.toUpperCase(),
        giro: null,
        disposicionFinal: null,
        meses: semestre(2) //meses va a tomar la información del mes propiamente para
      }
      ArrRFC[ReceptorRFC] = true
      InformeSEMADET[nombre] = { ...Empresa }
    }
    // Aquí vamos a convertir las medidas que no sean kilogramos a kg y después sumarlas, si no tenemos una forma de transformarlo entonces vamos a mandarlo a una sección de inconvertibles para que el usuario elija la cantidad de kg por cada pieza

    let totalResiduos = InformeSEMADET[nombre].meses[mes_nombre].totalResiduosMensuales
    InformeSEMADET[nombre].meses[mes_nombre].totalResiduosMensuales = totalResiduos + cantidad
    let materialMes = InformeSEMADET[nombre].meses[mes_nombre].materiales
    InformeSEMADET[nombre].meses[mes_nombre].materiales = [...materialMes, { folio, unidad, descripcion, cantidad }]
    console.log(InformeSEMADET[nombre]);
    // console.log(InformeSEMADET[nombre].meses[mes_nombre])
  })
})

/*
Estructura
[
  ...,

  {  nombre: NOMBRE,
    rfc: RFC,
    meses: [  [] * 6 ],
    giro: A QUE SE DEDICA,
    disposicionFinal: LA DISPOSICION FINAL,
    //EJEMPLO DE MES
      {mes: octubre, materiales: [{tipo: RES-015, cantidad: 4500 KG}, {tipo: RES-014, cantidad: 1000 KG }] totalResiduosMensuales: 1000 + 45000 }
    \\ EJEMPLO DE MES
  }
]
*/

/*
{ emisor:
   { nombre: 'MARIA GLADIS DE SANTOS GONZALEZ',
     rfc: 'SAGG630512TU5',
     domicilio:
      { calle: 'Ave. Juan Gil Preciado',
        codigoPostal: '45134',
        colonia: 'Marcelino Garcia Barragan',
        estado: 'Jalisco',
        municipio: 'Zapopan',
        noExterior: '2134',
        pais: 'Mexico' } },
  receptor:
   { nombre: 'Pedro Alberto Quintero Aguilar',
     rfc: 'QUAP770629QS8',
     domicilio:
      { calle: 'Jesus Ortiz',
        codigoPostal: '44220',
        colonia: 'Guadalupana',
        estado: 'Jalisco',
        localidad: 'Guadalajara',
        municipio: 'Guadalajara',
        noExterior: '2265',
        pais: 'Mexico' } },
  conceptos:
   [ { cantidad: 3,
       importe: 390,
       noIdentificacion: 'T200L',
       unidad: 'PZA',
       descripcion: 'Tambo de lámina de 200 L',
       valorUnitario: 390 } ],
  fecha:
   { ano: 2016,
     mes: 12,
     mes_nombre: 'diciembre',
     mes_js: 11,
     dia: 19,
     dia_semana: 'lunes',
     hora: 15,
     minuto: 28,
     segundo: 27 },
  lugarExpedicion: 'Zapopan, Jalisco',
  moneda: 'MXN',
  fechaOriginal: '2016-12-19T15:28:27',
  objetoFecha: 2016-12-19T21:28:27.000Z,
  folio: '315',
  metodoDePago: '01',
  subTotal: '390.00',
  total: '452.40' }
*/
