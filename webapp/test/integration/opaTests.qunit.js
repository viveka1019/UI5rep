/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/kaar/ehal/eHauling_system/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});