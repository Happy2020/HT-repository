var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(url.parse(_url, true).pathname);

    //console.log(title);

    /*
    if(_url == '/'){
      //_url = '/index.html';
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    */

    fs.readFile(`Data/${queryData.id}`, 'utf8', function(err, description){
      //console.log(queryData.id);
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <!-- <h1><a href="index.html">WEB</a></h1> -->
        <ul>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      response.writeHead(200);
      response.end(template);
    })

    //console.log(__dirname + url);
    //response.end(fs.readFileSync(__dirname + url));

    //return;
    //response.writeHead(200);
    //response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);