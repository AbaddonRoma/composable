'use strict';

var proxyquire = require('proxyquire').noCallThru().noPreserveCache();

function proxyModel() {
    return proxyquire('../../../cartridges/app_storefront_base_composable/cartridge/models/store', {});
}

module.exports = proxyModel();
