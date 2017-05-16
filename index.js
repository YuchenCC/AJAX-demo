var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 8888;

var server = http.createServer(function(request, response){

  var temp = url.parse(request.url, true)
  var path = temp.pathname
  var query = temp.query


  switch(path){
    case  '/index.html':
      var htmlString = fs.readFileSync('./index.html')
      response.setHeader('Content-Type','text/html')
      response.end(htmlString)
      break
    case '/style.css':
      var cssString = fs.readFileSync('./style.css')
      response.setHeader('Content-Type','text/css')
      response.end(cssString)
      break
    case '/main.js':
      var jsString = fs.readFileSync('./main.js')
      response.setHeader('Content-Type','text/javascript')
      response.end(jsString)
      break
    case '/package1.json':
      var jsonString = fs.readFileSync('./package1.json')
      response.setHeader('Content-Type','application/json')
      response.end(jsonString)
      break
    case '/package2.json':
      var jsonString = fs.readFileSync('./package2.json')
      response.setHeader('Content-Type','application/json')
      response.end(jsonString)
      break
    case '/package3.json':
      var jsonString = fs.readFileSync('./package3.json')
      response.setHeader('Content-Type','application/json')
      response.end(jsonString)
      break
    case '/package4.json':
      var jsonString = fs.readFileSync('./package4.json')
      response.setHeader('Content-Type','application/json')
      response.end(jsonString)
      break
    case '/package5.json':
      var jsonString = fs.readFileSync('./package5.json')
      response.setHeader('Content-Type','application/json')
      response.end(jsonString)
      break
    
    default:
      response.end('404')
      break
  }

  // �������������治Ҫ��
})

