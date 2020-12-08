sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("home.kpmg.exercise1.controller.MainView", {
		onInit: function () {
			var data = {
				recipient: {
					name: "Daniel"
				}
			};
			var oModel = new JSONModel(data);
			this.getView().setModel(oModel);
		}
	});
});