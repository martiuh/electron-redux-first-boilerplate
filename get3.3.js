const { meses } = require('./const.js')

module.exports =  get3p3 = data => {
    let Factura = {
      emisor: {},
      receptor: {},
      conceptos: {}
    }
      const cuerpoFactura = data['cfdi:Comprobante']
      const lugarExpedicion = data['LugarExpedicion']
      let { Fecha } = data
      const { Moneda, Folio, MetodoDePago, SubTotal, Total } = data
      const Emisor = data['cfdi:Emisor']
      const EmisorNombre = Emisor.Nombre
      const EmisorRFC = Emisor.Rfc
      const Receptor = data['cfdi:Receptor']
      const ReceptorNombre = Receptor.Nombre
      const ReceptorRFC = Receptor.Rfc
      const conceptos = data['cfdi:Conceptos'] //Un array de conceptos
      const fechaSplited = Fecha.split('T')
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
        let { NoIdentificacion, Unidad, Descripcion, Importe, Cantidad } = CONCEPTO
        conceptosArr.push(
        { cantidad: parseFloat(Cantidad),
          importe: parseFloat(Importe),
          noIdentificacion: NoIdentificacion,
          unidad: Unidad,
          descripcion: Descripcion,
          ValorUnitario: parseFloat(Importe) }
        )
      } 
      else {
        const CON = conceptos['cfdi:Concepto']
        CON.forEach( CONCEPTO => {
          let { NoIdentificacion, Unidad, Descripcion, Importe, Cantidad } = CONCEPTO
          conceptosArr.push(
          { cantidad: parseFloat(Cantidad),
            importe: parseFloat(Importe),
            noIdentificacion: NoIdentificacion,
            unidad: Unidad,
            descripcion: Descripcion,
            ValorUnitario: parseFloat(Importe) }
          )
        })
      }

      Factura.fecha = { ano,mes,mes_nombre,mes_js,dia,dia_semana,hora,minuto,segundo }
      Factura.conceptos = conceptosArr
      Factura.lugarExpedicion = lugarExpedicion
      Factura.moneda = Moneda
      Factura.fechaOriginal = Fecha
      Factura.objetoFecha = objetoFecha
      Factura.folio = Folio
      Factura.metodoDePago = MetodoDePago
      Factura.subTotal = SubTotal
      Factura.total = Total
      Factura.receptor = { nombre: ReceptorNombre, rfc: ReceptorRFC }
      Factura.emisor = { nombre: EmisorNombre, rfc: EmisorRFC }
      return Factura
}
