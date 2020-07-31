sap.ui.define(["com/kaar/ehal/eHauling_system/controller/BaseController"], function (BaseController) {
	"use strict";
	return BaseController.extend("com.kaar.ehal.eHauling_system.controller.DriverInfo", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.kaar.ehal.eHauling_system.view.DriverInfo
		 */
		onInit: function () {
				var sUrl = "/sap/opu/odata/sap/zppr_issuance_srv";
				var BenefitsSetModel1 = new sap.ui.model.odata.ODataModel(sUrl, true);
				this.getView().setModel(BenefitsSetModel1);
		},
		onPress:function(){
			this.getRouter().navTo("DriverDet",{},true);
		},
		onNavBack: function(){
			this.getRouter().navTo("TargetMain",{},true);
		}
		

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.kaar.ehal.eHauling_system.view.DriverInfo
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.kaar.ehal.eHauling_system.view.DriverInfo
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.kaar.ehal.eHauling_system.view.DriverInfo
		 */
		//	onExit: function() {
		//
		//	}

	});

});