"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MaterialService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var material_schema_1 = require("./schema/material.schema");
var MaterialService = /** @class */ (function () {
    function MaterialService(courseModel) {
        this.courseModel = courseModel;
    }
    MaterialService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel(material_schema_1.Material.name))
    ], MaterialService);
    return MaterialService;
}());
exports.MaterialService = MaterialService;
