var express = require('express');
const next = require('next');
const port = "5500";
const dev = true;

const app = next({dev});
const handle = app.getRequestHandler();

app
   .prepare()
   .then(() => {
      const server = express();

      server.get('/api', (req, res) => {
         return res.end("It is working fine!!");
      });

      server.get('*', function (req, res) {
        return handle(req, res);
      });

      server.listen(port, err => {
         if(err) throw err;
         console.log(`Server runs on ${port}`);
      });
   }) 
