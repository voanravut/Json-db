// const jsonSever = require('json-server');
// const server = jsonSever.create();
// const router = jsonSever.router('db.json');
// const middleware = jsonSever.defaults();

// const cors = require('cors');
// const host = "127.0.0.1";
// const port = 3000;
// server.use(cors());
// server.use(middleware);
// server.use(router);

// server.listen(host,port,()=>{
//     console.log(`server listening on http://${host}:${port}`);
    
// })


// import jsonServer from "json-server";  // Corrected the spelling
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');  // Path to your db.json
// const middleware = jsonServer.defaults();  // Default middlewares

// const cors = require('cors');  // Importing cors for handling cross-origin requests
// const host = "127.0.0.1";  // Host address
// const port = 3000;  // Port number

// // Use CORS middleware
// server.use(cors());

// // Use default middlewares
// server.use(middleware);

// // Use the router with the db.json file
// server.use(router);

// // Listen on the specified host and port
// server.listen(port, host, () => {
//     console.log(`Server listening on http://${host}:${port}`);
// });



// const jsonServer = require('json-server');  // Using 'require' instead of 'import'
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');  // Path to your db.json
// const middleware = jsonServer.defaults();  // Default middlewares

// const cors = require('cors');  // Importing cors for handling cross-origin requests
// const host = "localhost";  // Host address
// const port = 3000;  // Port number

// // Use CORS middleware
// server.use(cors());

// // Use default middlewares
// server.use(middleware);

// // Use the router with the db.json file
// server.use(router);

// // Listen on the specified host and port
// server.listen(port, host, () => {
//     console.log(`Server listening on http://${host}:${port}`);
// });

const jsonServer = require('json-server');  
const cors = require('cors');  

// Create a new json-server instance  
const server = jsonServer.create();  
const router = jsonServer.router('db.json');  // Path to your db.json  
const middleware = jsonServer.defaults();  // Default middlewares  

// Use CORS middleware  
server.use(cors());  

// Use default middlewares  
server.use(middleware);  

// Use the router with the db.json file  
server.use(router);  

// Read PORT from environment variable or use default 3000  
const host = process.env.HOST || '0.0.0.0'; // Use '0.0.0.0' for cloud deployment  
const port = process.env.PORT || 3000;  // Default to port 3000  

// Listen on the specified host and port  
server.listen(port, host, () => {  
    console.log(`Server listening on http://${host}:${port}`);  
});
const cors = require('cors');  
server.use(cors());  