const fs = require('fs')
const XML = require('pixl-xml')
const get3p2 = require('./get3.2')
const get3p3 = require('./get3.3')

module.exports = getFactura = location => {
  const data = XML.parse(fs.readFileSync(location).toString())
  let { version } = data;
  version = version || data.Version
  //Sacamos la versión del CFDI para saber con cual Generador vamos a sacar los datos
  if (version === '3.3') {
    return get3p3(data)
  }
  return get3p2(data)
};
