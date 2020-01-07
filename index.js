var http = require('http')
var math = require('./modules/add')
var test = require('./modules/test')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  var sum = math.add(1, 2)
  res.write('SUM =' + sum)
  res.write('\r\n' + test.test())
  res.write('\r\nHello World!')
  res.end()
}).listen(8080)

console.log('Ok, first step done.')
