var fs = require('fs')
var cssscss = require('css-scss')

var src = fs.readFileSync('./static/css/date/antd.css', 'utf8')
var scss = cssscss(src)

fs.writeFileSync('./antd.scss', scss)
