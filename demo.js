(function () {
  'use strict'
  angular.module('example', []);
})();

(function () {
  'use strict';

  angular
    .module('example')
    .controller('MainCtrl', CoreFunction)

  function CoreFunction() {
    var vm = this, addressCollection = [], isEditing = false;

    

    // functions that are not attached to the view model 
    var adding = function () {
        var newPerson = {};

        if (!angular.equals({}, vm.person)) {
          	if (isEditing !== false) {
            addressCollection[isEditing] = vm.person;
            isEditing = false;
          } else {
          	newPerson = vm.person
            addressCollection.push(newPerson);
          }

          vm.addresses = addressCollection;
          vm.person = {};
        }
      },



    edit = function (editPerson) {
        isEditing = addressCollection.indexOf(editPerson);
        vm.person = angular.copy(editPerson);
      },
		
    reset = function () {
        vm.person = {};
        vm.search = '';
        isEditing = false;
      },

    remove = function (removePerson) {
        var index = addressCollection.indexOf(removePerson);
        addressCollection.splice(index, 1);
        if (addressCollection.length === 0) {
          vm.person = {};
          vm.addresses = undefined;
        }
      }

		/*Function calling for the event*/
      	vm.addClickHandler = function () {
      	adding();
    	}

    	vm.saveClickHandler = function () {
      	adding();
    	}

    	vm.editClickHandler = function (editPerson) {
      	edit(editPerson);
    	}

    	vm.resetClickHandler = function () {
      	reset();
    	}

    	vm.removeClickHandler = function (removePerson) {
      	remove(removePerson);
    	}

	}
}());