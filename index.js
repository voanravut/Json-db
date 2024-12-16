const jsonSever = require('json-server');
const server = jsonSever.create();
const router = jsonSever.router('db.json');
const middleware = jsonSever.defaults();

const cors = require('cors');
const port = 3000;
server.use(cors());
server.use(middleware);
server.use(router);

server.listen(host,port,()=>{
    console.log(`server listening on http://${host}:${port}`);
    
})
