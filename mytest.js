
const http = require('http');  //Node module
const url = require('url');
const hostname = '127.0.0.1'; //ipv 4
const port = 3000; //Socket

const controller = {
  GET : {},
  POST: {},
  PUT : {},
  DELETE : {},
  HEAD : {}
}

controller.GET['/'] = function(req,res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello GET Root!\n');
}

controller.GET['/info'] = function(req,res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello GET info!\n');
}

controller.POST['/'] = function(req,res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello POST Root!\n');
}

controller.POST['/info'] = function(req,res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello POST info!\n');
}



const server = http.createServer((req, res) => {
  //We want to know the method
  //We want to get the url

  //console.log(req.method);
  //console.log(req.url);
  try
  {
    controller[req.method][req.url](req,res);
  }catch(error)
  {
    console.log(error);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Please fix me no controller exist!\n');
  }
  /*
  switch(req.method)
  {
    case 'GET':
      console.log('Get the handler for get');
    break;

    case 'POST':
      console.log('Get the handler for post');

    break;

    case 'PUT':
      console.log('Get the handler for put');

    break;

    case 'DELETE':
      console.log('Get the handler for delete');

    break;

    case'HEAD':
      console.log('Get the handler for head');

    break;

    default :

    console.log('Get the default handler');



  }
*/


});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
