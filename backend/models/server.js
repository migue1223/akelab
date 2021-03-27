'use strict';

// Servidor de Express
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const http = require('http');

// Routes
const films = require('../routes/films');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;

    // Http server
    this.server = http.createServer(this.app);
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // parseo del body
    this.app.use(express.json());

    //helmet
    this.app.use(helmet());

    // api end points
    this.app.use('/api', films());
  }

  execute() {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log('Server corriendo en puerto:', this.port);
    });
  }
}

module.exports = Server;
