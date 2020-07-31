sap.ui.define([
	"com/kaar/ehal/eHauling_system/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function (BaseController, JSONModel, MessageToast) {
	"use strict";
	return BaseController.extend("com.kaar.ehal.eHauling_system.controller.contactInfo", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.kaar.ehal.eHauling_system.view.contactInfo
		 */
		onInit: function () {
			// load JSON sample data
			var oModel = new JSONModel(sap.ui.require.toUrl("com/kaar/ehal/eHauling_system/model/data.json"));
			this.getView().setModel(oModel);
		},
		/**
		 *@memberOf com.kaar.ehal.eHauling_system.controller.contactInfo
		 */
		onNavBack: function (oEvent) {
			//This code was generated by the layout editor.
			this.getRouter().navTo("TargetMain", {}, true);
		}
	});
});