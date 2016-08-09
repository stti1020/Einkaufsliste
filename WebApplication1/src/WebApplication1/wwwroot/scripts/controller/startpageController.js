(function () {
    'use strict';

    angular
        .module('app')
        .controller('startpageController', startpageController);

    startpageController.$inject = ['startpageService'];

    function startpageController(startpageService) {
        var vm = this;

        startpageService.getAllProduct().then(function(products) {
            vm.products = products;
        });

        vm.recipes = [
            {
                Name: 'Nudelsalat', fixings:
                   [
                       { Name: 'Spaghetti', Quantity: '500', unit: "Gramm", Supermarket: 'Rewe' },
                       { Name: 'Pesto', Quantity: '500', Unit: "Gramm", Supermarket: 'Rewe' },
                       { Name: 'Tomaten', Quantity: '500', Unit: "Gramm", Supermarket: 'Rewe' }
                   ]
            },
            {
                Name: 'Bolognese', fixings:
                   [
                       { Name: 'Spaghetti', Quantity: '500', Unit: "Gramm", Supermarket: 'Rewe' },
                       { Name: 'Fleisch', Quantity: '500', Unit: "Gramm", Supermarket: 'Rewe' },
                       { Name: 'Tomatensoße', Quantity: '500', Unit: "Gramm", Supermarket: 'Rewe' }
                   ]
            }
        ];
        console.log(vm.recipes);

        vm.currentRecipe = vm.recipes[0];

        vm.addProduct = addProduct;
        vm.deleteList = deleteList;
        vm.deleteItem = deleteItem;
        vm.changeRecipe = changeRecipe;
        vm.addRecipe = addRecipe;

        function addProduct() {
            var productToAdd = { Name: vm.name, Quantity: vm.quantity, Unit: vm.unit, Supermarket: vm.supermarket };
            vm.products.push(productToAdd);
            startpageService.addProduct(productToAdd);
            vm.name = vm.quantity = vm.supermarket = vm.unit = "";
            
        }

        function deleteList() {
            vm.products = [];
            startpageService.deleteAllProducts();
        }

        function deleteItem(index, productName) {
            vm.products.splice(index, 1);
            startpageService.deleteProductByName(productName);
        }

        function changeRecipe(recipe) {
            vm.currentRecipe = recipe;
        }

        function addRecipe() {
            angular.forEach(vm.currentRecipe.fixings, function (product) {
                vm.products.push(product);
                startpageService.addProduct(product);
            });
        }
    }
})();
