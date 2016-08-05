
angular.module('app')
    .controller('startpageController', function(){

        var vm = this;


        vm.produkte = [
            {name: 'Schokolade', anzahl: '500', einheit: "Gramm", laden: 'Rewe' },
            {name: 'Schokolade', anzahl: '500', einheit: "Gramm", laden: 'Lidl' },
            {name: 'Schokolade', anzahl: '500', einheit: "Gramm", laden: 'Rewe' }
        ];

        vm.rezepte = [
            {name: 'Nudelsalat', zutaten:
                [
                    {name: 'Spaghetti', anzahl: '500', einheit: "Gramm", laden: 'Rewe' },
                    {name: 'Pesto', anzahl: '500', einheit: "Gramm", laden: 'Rewe' },
                    {name: 'Tomaten', anzahl: '500', einheit: "Gramm", laden: 'Rewe' }
                ]
            },
            {name: 'Bolognese', zutaten:
                [
                    {name: 'Spaghetti', anzahl: '500', einheit: "Gramm", laden: 'Rewe' },
                    {name: 'Fleisch', anzahl: '500', einheit: "Gramm", laden: 'Rewe' },
                    {name: 'Tomatensoﬂe', anzahl: '500', einheit: "Gramm", laden: 'Rewe' }
                ]
            }
        ];

        vm.aktuellesRezept = vm.rezepte[0];

        vm.addProduct = addProduct;
        vm.deleteList = deleteList;
        vm.deleteItem = deleteItem;
        vm.changeRezept = changeRezept;
        vm.addRezept = addRezept;

        function addProduct(){
            vm.produkte.push({name: vm.name, anzahl: vm.anzahl, einheit: vm.einheit, laden: vm.laden});
            vm.name =  vm.anzahl =  vm.laden = vm.einheit = "";
        }

        function deleteList(){
            vm.produkte = [];
            console.log(vm.list);
        }

        function deleteItem(index){
            vm.produkte.splice(index,1);
        }

        function changeRezept(rezept){
            vm.aktuellesRezept = rezept;
        }

        function addRezept(){
            angular.forEach(vm.aktuellesRezept.zutaten, function(produkt){
                vm.produkte.push(produkt);
            });
        }

    });