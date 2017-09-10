/* ===========================================================================
 * StandardizedTherapyTests
 * ===========================================================================
 * Copyright 2017 Ray Nowell
 * Licensed under something
 * =========================================================================== */
'use strict';
var sttApp = angular.module('sttApp', ['ionic']);

(function (app) {
    app.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    });
})(sttApp);