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

/** @namespace */
var $templating = $templating || require('giant-templating');

/** @namespace */
var $i18n = $i18n || require('giant-i18n');

/** @namespace */
var $routing = $routing || require('giant-routing');

/** @namespace */
var $transport = $transport || require('giant-transport');

/** @namespace */
var $widget = $widget || require('giant-widget');

/** @namespace */
var $asset = $asset || require('giant-asset');

/** @namespace */
var $commonWidgets = $commonWidgets || require('giant-common-widgets');

if (typeof require === 'function') {
    require('giant-table');
}
