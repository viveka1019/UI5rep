/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/kaar/ehal/eHauling_system/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});