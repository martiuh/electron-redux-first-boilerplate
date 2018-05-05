const fs = require('fs');
const { parse } = require('pixl-xml')

const getFactura = require('./getFactura');
const consistenceXML = require('./consistenceXML')
// List all files in a directory in Node.js recursively in a synchronous fashion

const ListXML = function(dir, filelist = []) {
  let files = fs.readdirSync(dir);
  const onlyXML = /\.*.xml$/
  files.forEach(function(file) {
    let fullFile = `${dir}/${file}`
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = ListXML(dir + '/' + file, filelist);
    }
    else {
      if (onlyXML.test(file)) {
        filelist.push(fullFile);
      }
    }
  });
  return filelist;
};
let facturaArr = []
const allXML = ListXML(__dirname + '/xml/SEMADET OCT 17 - MAR 18', [])

// consistenceXML(allXML)

allXML.forEach( (FacturaLocation) => {
  let factura = getFactura(FacturaLocation)
  facturaArr = [...facturaArr, factura]
})

module.exports = facturaArr;
