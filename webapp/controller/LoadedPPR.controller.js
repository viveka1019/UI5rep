sap.ui.define(["com/kaar/ehal/eHauling_system/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.kaar.ehal.eHauling_system.controller.LoadedPPR", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.kaar.ehal.eHauling_system.view.LoadedPPR
		 */
		onInit: function () {

		},
		onNavBack: function(oEvent)
		{
		this.getRouter().navTo("TargetMain", {}, true);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.kaar.ehal.eHauling_system.view.LoadedPPR
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.kaar.ehal.eHauling_system.view.LoadedPPR
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.kaar.ehal.eHauling_system.view.LoadedPPR
		 */
		//	onExit: function() {
		//
		//	}

	});

});