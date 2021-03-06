//this is just a copy of coffe run's remote data store
const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';
(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
        
    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('RemoteDataStore requires a url');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (val) {
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    }

    RemoteDataStore.prototype.get = function (key, cb) {
        $.get(this.serverUrl + '?emailAddress=' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);

            if(document.getElementById("item-counter")) { // I couldn't find a better place to put it. Checks if page is index.html
            updateItemCount(Object.values(cartItems).reduce(function(sumTotal, currentValue) {
                return sumTotal + currentValue
            }, 0))
        }

        });
    };

    RemoteDataStore.prototype.getAll = function (cb) {
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key)  { //this will need some fixing
        $.ajax(this.serverUrl + '?emailAddress=' + key, { type: 'DELETE' });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window)

let App = window.App;
let RemoteDataStore = App.RemoteDataStore;
let remoteDataStore = new RemoteDataStore(SERVER_URL);