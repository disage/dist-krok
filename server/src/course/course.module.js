"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CourseModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var course_controller_1 = require("./course.controller");
var course_service_1 = require("./course.service");
var course_schema_1 = require("./schema/course.schema");
var CourseModule = /** @class */ (function () {
    function CourseModule() {
    }
    CourseModule = __decorate([
        common_1.Module({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: course_schema_1.Course.name, schema: course_schema_1.CourseSchema }]),
            ],
            controllers: [course_controller_1.CoursesController],
            providers: [course_service_1.CourseService]
        })
    ], CourseModule);
    return CourseModule;
}());
exports.CourseModule = CourseModule;
