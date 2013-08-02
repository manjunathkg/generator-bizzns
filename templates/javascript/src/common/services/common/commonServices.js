angular.module('services.commonServices', 
                        [
                          'firebase',
                          'titleService',
                          'plusOne',
                          'services.breadcrumbs',
                          'services.crud',
                          'services.exceptionHandler',
                          'services.httpRequestTracker',
                          'services.localizedMessages',
                          'services.notifications',
                          'services.i18nNotifications',
                          'services.crudRouteProvider'

                        ])
    // define the request notification channel for the pub/sub service
    .factory('notificationChannel', ['$rootScope', function ($rootScope) {
        // private notification messages
        var _EDIT_DATA_ = '_EDIT_DATA_';
        var _DATA_UPDATED_ = '_DATA_UPDATED_';

        // publish edit data notification
        var editData = function (item) {
            $rootScope.$broadcast(_EDIT_DATA_, {item: item});
        };
        //subscribe to edit data notification
        var onEditData = function($scope, handler) {
            $scope.$on(_EDIT_DATA_, function(event, args) {
               handler(args.item);
            });
        };
        // publish data changed notification
        var dataUpdated = function () {
            $rootScope.$broadcast(_DATA_UPDATED_);
        };
        // subscribe to data changed notification
        var onDataUpdated = function ($scope, handler) {
            $scope.$on(_DATA_UPDATED_, function (event) {
                handler();
            });
        };
        // return the publicly accessible methods
        return {
            editData: editData,
            onEditData: onEditData,
            dataUpdated: dataUpdated,
            onDataUpdated: onDataUpdated
        };
    }])
    // define the data service that manages the data
    .factory('firebaseService', ['angularFire','notificationChannel', 'angularFireCollection',
                        function (angularFire,notificationChannel, angularFireCollection ) {
        // private data
        var firebaseRoot = "https://bizzns.firebaseio.com/" ;
        // sends notification that data has been updated
        var setFirebaseRoot = function(root) {
            notificationChannel.dataUpdated();
            console.log("setFirebaseRoot = " + setFirebaseRoot);
        };
        // removes the item from the array and sends a notification that data has been updated
        var getFirebaseRoot = function() {
             console.log("getFirebaseRoot = " + getFirebaseRoot);
        };
        // internal function to generate a random number guid generation
        var S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        // generates a guid for adding items to array
        var guid = function () {
          return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
        };
        // function to add a hop to the array and sends a notification that data has been updated
        var saveData = function(data) {
            hops.id.$oid = guid(); 
            notificationChannel.dataUpdated();
        };
        // returns the array of hops
        var deleteData = function() { 
            console.log("delete data");
        };

        var getFirebaseDataURL = function(appRoot, $scope){
            return angularFire(firebaseRoot + '/' + appRoot, $scope, 'bizzns', []);
        };
         
 
        var getFirebaseCollection = function(appRoot, $scope, type){
            return angularFireCollection(firebaseRoot + '/' + appRoot+ "/"+type);
        };

        
        // return the publicly accessible methods
        return {
            setFirebaseRoot: setFirebaseRoot,
            getFirebaseRoot: getFirebaseRoot,
            saveData: saveData,
            deleteData: deleteData,
            getFire : getFirebaseDataURL,
            getFirebaseCollection : getFirebaseCollection
        };
    }]);





