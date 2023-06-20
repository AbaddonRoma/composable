'use strict';

var assert = require('chai').assert;

describe('product line item options decorator', function () {
    var options = require('../../../../../../cartridges/app_storefront_base_composable/cartridge/models/productLineItem/decorators/options');

    it('should create options property for passed in object', function () {
        var object = {};
        options(object, [{}]);

        assert.equal(object.options.length, 1);
    });
});
