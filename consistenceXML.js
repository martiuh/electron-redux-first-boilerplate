const XML = require('pixl-xml')
const fs = require('fs')

// TODO: Conseguir de forma recursiva toda la información que tiene un XML para ver si son o no consistentes

/*
  KEYS:
  [ 'xmlns:xsi',
  'xmlns:cfdi', //El tipo de CFDI de la factura String
  'LugarExpedicion',
  'Moneda',
  'NumCtaPago',
  'certificado',
  'fecha',
  'folio',
  'formaDePago',
  'metodoDePago',
  'noCertificado',
  'serie',
  'subTotal',
  'tipoDeComprobante',
  'total',
  'version',
  'xsi:schemaLocation',
  'sello',
  'cfdi:Emisor',
  'cfdi:Receptor',
  'cfdi:Conceptos',
  'cfdi:Impuestos',
  'cfdi:Complemento' ]
*/
