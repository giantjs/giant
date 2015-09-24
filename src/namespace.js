/*jshint node:true */

/** @namespace */
var giant = giant || require('giant-namespace');

/** @namespace */
var $assertion = $assertion || require('giant-assertion');

/** @namespace */
var $oop = $oop || require('giant-oop');

if (typeof require === 'function') {
    require('giant-asset');
    require('giant-common-widgets');
    require('giant-data');
    require('giant-entity');
    require('giant-event');
    require('giant-i18n');
    require('giant-routing');
    require('giant-table');
    require('giant-templating');
    require('giant-transport');
    require('giant-widget');
}
