REDIRECT_URL = 'http://www.artalph.com/';

WebApp.connectHandlers
  .use(function(req, res, next) {
    console.log(req.url);
    var location = REDIRECT_URL;
    res.writeHead(301, {'Location': location});
    res.end();
  });