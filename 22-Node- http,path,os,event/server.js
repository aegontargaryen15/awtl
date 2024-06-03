const http = require('http');
const os = require('os');
const path = require('path');
const EventEmitter = require('events');

const PORT =3000;

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log(`http://localhost:${PORT}/event : triggered an event!`);
});



const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the Node.js Server\n</h1>');
  } else if (req.url === '/os') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
     res.end(`
     <h1>OS</h1>
     <h3>Platform: ${os.platform()}</h3>
     <h3>Arch: ${os.arch()}</h3>
     <h3>Release: ${os.release()}</h3>
     <h3>Total Memory: ${os.totalmem()}</h3>
     <h3>Free Memory: ${os.freemem()}</h3>
     <h3>Hostname: ${os.hostname()}</h3>
     <h3>Username: ${os.userInfo().username}</h3>
     <h3>Uptime: ${os.uptime()}</h3>
     <h3>Type: ${os.type()}</h3>
     `
    )
  } else if (req.url === '/path') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
     <h1>Path</h1>
     <h3>basename: ${path.basename(__filename)}</h3>
     <h3>dirname: ${path.dirname(__filename)}</h3>
     <h3>extname: ${path.extname(__filename)}</h3>
     <h3>parse: ${JSON.stringify(path.parse(__filename))}</h3>
     `
    )
  } else if(req.url==='/event'){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
     <h1>Event is triggered ! check console!</h1>
     `
    )
    //Triggering the event
    myEmitter.emit('event');
  }else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n');
  }
});




server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
