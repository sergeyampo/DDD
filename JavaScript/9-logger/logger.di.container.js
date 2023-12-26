const config = require('./config');

module.exports = Object.freeze(require(`./${config.logger}-logger`));
