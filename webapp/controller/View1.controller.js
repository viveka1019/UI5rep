sap.ui.define(["com/kaar/ehal/eHauling_system/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.kaar.ehal.eHauling_system.controller.View1", {
		 onInit: function () {
		// 	var oPage = this.getView().byId("page");
		// 	var oTextArea = new sap.m.TextArea({
		// 		id:"oTextArea",
		// 		width: "100%",
		// 		required: true,
		// 		placeholder: "Add Note",
		// 		change: function () {
		// 			if (this.getValue() === " " || this.getValuew() === undefined || this.getValue() === null) {
		// 				this.setValueState(sap.ui.core.ValueState.Error); // if the field is empty after change, it will go red
		// 			} else {
		// 				this.setValueState(sap.ui.core.ValueState.None); // if the field is not empty after change, the value state (if any) is removed
		// 			}
		// 		},
		// 		validationError: function(){
		// 			if (this.getValue() === " " || this.getValuew() === undefined || this.getValue() === null) {
		// 				this.setValueState(sap.ui.core.ValueState.Error); // if the field is empty after change, it will go red
		// 			} else {
		// 				this.setValueState(sap.ui.core.ValueState.None); // if the field is not empty after change, the value state (if any) is removed
		// 			}
		// 		}
		// 	});
		// 	var	beginButton = new sap.m.Button({
		// 		type: "Accept",
		// 		text: "SEND",
		// 		press: function() {
		// 		sap.m.MessageToast.show(sap.ui.getCore().byId("oTextArea").getValue());	
					
		// 		}
		// 	});
		// 	oPage.addContent(oTextArea);
		// 	oPage.addContent(beginButton);

		 },
		 linkIssuePR: function(){
		 	this.getRouter().navTo("PPRIssuance", {}, true);                         
		 },
		 loadedPPR: function(){
		 	this.getRouter().navTo("LoadedPPR", {}, true);
		 },
		 onCompSugg: function(){
		 this.getRouter().navTo("ComplaintSugg", {}, true);
		 },
		 generateDash: function(){
		 	 this.getRouter().navTo("Dashboard", {}, true);
		 },
		 addContact: function(){
		 	 this.getRouter().navTo("contactInfo", {}, true);
		 },
		 addDriver: function(){
		 	this.getRouter().navTo("DriverInfo", {}, true);
		 },
		 addTruck: function(){
		 	this.getRouter().navTo("TruckInfo", {}, true);
		 },
		 addInvoice: function(){
		 	this.getRouter().navTo("Invoices", {}, true);
		 }
	});
});