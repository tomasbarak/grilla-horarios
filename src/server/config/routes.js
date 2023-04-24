"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
var personRoute = require("../routes/person");
var programRoute = require("../routes/program");
var timeGridRoute = require("../routes/timeGrid");
var init = function (app, personController, programController, timeGridController) {
    personRoute.init(app, personController);
    programRoute.init(app, programController);
    timeGridRoute.init(app, programController, timeGridController);
};
exports.init = init;
