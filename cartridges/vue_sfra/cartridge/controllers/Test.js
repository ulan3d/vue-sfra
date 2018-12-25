var server = require('server');
server.extend(module.superModule);

server.get(
    'Test', function (req, res, next) {
        var Vue = require('shared/vue/dist/vue');
        var basicRenderer = require('shared/vue/packages/vue-server-renderer/basic');
        var data = getData(req, res, next);

        var vm = new Vue({
            template:
'<body>' +
'  <h1>{{category.name}}</h1>'+
'  <p>{{category.pageTitle}}</p>'+
'  <div class="grid">'+
'    <div v-for="id in productIds">{{id.productID}}</div>'+
'  </div>'+
'</body>',
            data: data
        });

        var html;
        basicRenderer(vm, function (err, result) {
            html = result;
        });

        res.render('/test', { html: html });
        next();
    }
);

var getData = function (req, res, next) {
var CatalogMgr = require('dw/catalog/CatalogMgr');
    var ProductSearch = require('*/cartridge/models/search/productSearch');
    var productSearch;
    var ProductSearchModel = require('dw/catalog/ProductSearchModel');
    var searchHelper = require('*/cartridge/scripts/helpers/searchHelpers');
    var apiProductSearch = new ProductSearchModel();
    apiProductSearch = searchHelper.setupSearch(apiProductSearch, req.querystring);
    apiProductSearch.search();

    return productSearch = new ProductSearch(
        apiProductSearch,
        req.querystring,
        req.querystring.srule,
        CatalogMgr.getSortingOptions(),
        CatalogMgr.getSiteCatalog().getRoot()
    );
}

server.get(
    'JSON', function (req, res, next) {
        var data = getData(req, res, next);

        res.json(data);
        next();
    }
);
module.exports = server.exports();
