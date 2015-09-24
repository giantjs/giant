/*jshint node:true */

/** @namespace */
var giant = giant || require('giant-namespace');

/** @namespace */
var $assertion = $assertion || require('giant-assertion');

/** @namespace */
var $oop = $oop || require('giant-oop');

/** @namespace */
var $data = $data || require('giant-data');

/** @namespace */
var $event = $event || require('giant-event');

/** @namespace */
var $entity = $entity || require('giant-entity');

if (typeof require === 'function') {
    require('giant-asset');
    require('giant-common-widgets');
    require('giant-i18n');
    require('giant-routing');
    require('giant-table');
    require('giant-templating');
    require('giant-transport');
    require('giant-widget');
}
