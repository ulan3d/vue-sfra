/* eslint-disable global-require */
var server = require('server');
server.extend(module.superModule);

server.get('Hello', function (req, res, next) {
    var data = { name: 'Username', count: 0 };
    res.vue('vue_sfra/cartridge/components/dist/Hello', data);
    next();
});

module.exports = server.exports();
