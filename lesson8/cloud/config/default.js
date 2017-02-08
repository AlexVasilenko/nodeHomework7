'use strict';

const multerConfig = require('./multer');

module.exports = {
  application: {
    port: 3000
  },
  services: {
    authN: {
      host: 'http://127.0.0.1:3001'
    }
  },
  swagger: {
    appRoot: './',
    swaggerFile: './api/swagger/swagger.json',
    fittingsDirs: [
      'middleware',
      'node_modules'
    ],
    defaultPipe: null,
    swaggerControllerPipe: 'swagger_controllers',
    bagpipes: {
      _router: {
        name: 'swagger_router',
        mockMode: false,
        mockControllersDirs: [],
        controllersDirs: [
          'controllers'
        ]
      },
      _swagger_validate: {
        name: 'swagger_validator',
        validateResponse: true
      },
      _swagger_params_parser: {
        name: 'swagger_params_parser',
        jsonOptions: {},
        urlencodedOptions: {
          extended: true
        },
        multerOptions: multerConfig
      },
      swagger_controllers: [
        'swagger_security',
        'authn',
        '_swagger_params_parser',
        'expressParams',
        'request_validation',
        'express_compatibility',
        '_router'
      ],
      swagger_raw: {
        name: 'swagger_raw'
      }
    }
  }
};
