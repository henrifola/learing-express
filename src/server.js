
var express = require('express');
var morgan = require('morgan');
var Router = require("./routes");


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const  swaggerJsdoc = require("swagger-jsdoc")


const app = express ();
const PORT = require('../config');

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Cool api",
      version: "0.1.0",
      description:
        "API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ['./routes'],
};

const specs = swaggerJsdoc(options);

app.use('/docs', 
swaggerUi.serve, 
swaggerUi.setup(specs));




app.use(express.json());
app.use(morgan("tiny"));

app.use(Router);


app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});

module.exports = app;
