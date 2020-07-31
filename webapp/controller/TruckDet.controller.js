sap.ui.define([
	"com/kaar/ehal/eHauling_system/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (BaseController, JSONModel, MessageToast) {
	"use strict";
	return BaseController.extend("com.kaar.ehal.eHauling_system.controller.TruckDet", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.kaar.ehal.eHauling_system.view.TruckDet
		 */
		onInit: function () {
			// load JSON sample data
			var oModel = new JSONModel(sap.ui.require.toUrl("com/kaar/ehal/eHauling_system/model/data3.json"));
			this.getView().setModel(oModel);
		},
		/**
		 *@memberOf com.kaar.ehal.eHauling_system.controller.contactInfo
		 */
		onNavBack: function (oEvent) {
			//This code was generated by the layout editor.
			this.getRouter().navTo("TruckInfo", {}, true);
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.kaar.ehal.eHauling_system.view.TruckDet
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.kaar.ehal.eHauling_system.view.TruckDet
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.kaar.ehal.eHauling_system.view.TruckDet
		 */
		//	onExit: function() {
		//
		//	}

	});

});