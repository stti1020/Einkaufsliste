(function () {
    'use strict';

    angular
        .module('app')
        .factory('startpageService', startpageService);

    startpageService.$inject = ['Restangular'];

    function startpageService(Restangular) {
        var service = {
            getAllProduct: getAllProduct,
            addProduct: addProduct,
            deleteAllProducts: deleteAllProducts,
            deleteProductByName: deleteProductByName
        };

        return service;

        function getAllProduct() {
            return Restangular.all('/api/Product/GetAllProducts').getList();
        }

        function addProduct(product) {
            return Restangular.all('api/Product')
                .customPOST({ name: "" }, "AddProduct", { name: product.Name, quantity: product.Quantity, unit: product.Unit, supermarket: product.Supermarket });
        }

        function deleteAllProducts() {
            console.log("asd");
            return Restangular.all('api/Product').customDELETE("DeleteAllProducts");
        }

        function deleteProductByName(productName) {
            return Restangular.all('api/Product').customDELETE("DeleteProductByName", { name: productName });
        }
    }
})();