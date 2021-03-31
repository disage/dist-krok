"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubjectModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var subject_controller_1 = require("./subject.controller");
var subject_service_1 = require("./subject.service");
var subject_schema_1 = require("./schema/subject.schema");
var SubjectModule = /** @class */ (function () {
    function SubjectModule() {
    }
    SubjectModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: subject_schema_1.Subject.name, schema: subject_schema_1.MaterialSchema }]),
            ],
            controllers: [subject_controller_1.SubjectController],
            providers: [subject_service_1.SubjectService]
        })
    ], SubjectModule);
    return SubjectModule;
}());
exports.SubjectModule = SubjectModule;
