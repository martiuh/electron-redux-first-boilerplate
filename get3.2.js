const { meses } = require('./const.js')

module.exports =  get3p2 = data => {
    let Factura = {
      emisor: {},
      receptor: {},
      conceptos: {}
    }
      const cuerpoFactura = data['cfdi:Comprobante']
      const lugarExpedicion = data['LugarExpedicion']
      let { fecha } = data
      const { Moneda, folio, metodoDePago, subTotal, total } = data
      fecha = fecha || data.Fecha
      const Emisor = data['cfdi:Emisor']
      const EmisorNombre = Emisor.nombre
      const EmisorRFC = Emisor.rfc
      const EDF = Emisor['cfdi:DomicilioFiscal']//Emisor Dirección Fiscal
      const Receptor = data['cfdi:Receptor']
      const ReceptorNombre = Receptor.nombre
      const ReceptorRFC = Receptor.rfc
      const RD = Receptor['cfdi:Domicilio'] //Receptor Dirección
      const conceptos = data['cfdi:Conceptos'] //Un array de conceptos
      const fechaSplited = fecha.split('T')
      const fechaCadena = `${fechaSplited[0]} ${fechaSplited[1]}`
      const objetoFecha = new Date(Date.parse(fechaCadena))
      const unConcepto = !(Array.isArray(conceptos['cfdi:Concepto']))
      const dias = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
      const dia_semana = dias[objetoFecha.getDay()]
      const dia = objetoFecha.getDate()
      const mes_js = objetoFecha.getMonth()
      const mes = mes_js + 1
      const mes_nombre = meses[mes_js]
      const ano = objetoFecha.getFullYear()
      const minuto = objetoFecha.getMinutes()
      const hora = objetoFecha.getHours()
      const segundo = objetoFecha.getSeconds()
      let conceptosArr = []

      if (unConcepto) {
        const CONCEPTO = conceptos['cfdi:Concepto']
        const {noIdentificacion,unidad,descripcion } = CONCEPTO
        conceptosArr.push(
        { cantidad: parseFloat(CONCEPTO.cantidad),
          importe: parseFloat(CONCEPTO.importe),
          noIdentificacion, unidad, descripcion,
          valorUnitario: parseFloat(CONCEPTO.importe) }
        )
      } else {
        const CON = conceptos['cfdi:Concepto']
        CON.forEach( (CONCEPTO) => {
          let { noIdentificacion,unidad,descripcion } = CONCEPTO
          conceptosArr.push(
          { cantidad: parseFloat(CONCEPTO.cantidad),
            importe: parseFloat(CONCEPTO.importe),
            noIdentificacion, unidad, descripcion,
            valorUnitario: parseFloat(CONCEPTO.importe) }
          )
        })
      }
      Factura.fecha = { ano,mes,mes_nombre,mes_js,dia,dia_semana,hora,minuto,segundo }
      Factura.conceptos = conceptosArr
      Factura.lugarExpedicion = lugarExpedicion
      Factura.moneda = Moneda
      Factura.fechaOriginal = fecha
      Factura.objetoFecha = objetoFecha
      Factura.folio = folio
      Factura.metodoDePago = metodoDePago
      Factura.subTotal = subTotal
      Factura.total = total
      Factura.receptor = {nombre: ReceptorNombre, rfc: ReceptorRFC, domicilio: RD}
      Factura.emisor = {nombre: EmisorNombre, rfc: EmisorRFC, domicilio: EDF}
      return Factura
}
