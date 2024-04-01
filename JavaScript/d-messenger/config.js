'use strict';

module.exports = {
  static: {
    port: 8000,
  },
  api: {
    port: 8001,
    transport: 'http',
  },
  sandbox: {
    timeout: 5000,
    displayErrors: false,
  },
  db: {
    host: 'localhost',
    port: 5432,
    database: 'metatech',
    user: 'admin',
    password: 'admin',
  },
  pg: {
    database: 'metatech',
    user: 'admin',
    password: 'admin',
  },
};
