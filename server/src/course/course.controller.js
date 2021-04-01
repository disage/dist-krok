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
exports.CoursesController = void 0;
var common_1 = require("@nestjs/common");
var CoursesController = /** @class */ (function () {
    function CoursesController(courseService) {
        this.courseService = courseService;
    }
    CoursesController.prototype.createCourse = function (dto) {
        return this.courseService.createCourse(dto);
    };
    CoursesController.prototype.editCourse = function (dto, id) {
        return this.courseService.editCourse(dto, id);
    };
    CoursesController.prototype.deleteCourse = function (id) {
        return this.courseService.deleteCourse(id);
    };
    CoursesController.prototype.getAllCourses = function () {
        return this.courseService.getAllCourses();
    };
    CoursesController.prototype.getOneCourse = function (id) {
        return this.courseService.getOneCourse(id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], CoursesController.prototype, "createCourse");
    __decorate([
        common_1.Put(':id'),
        __param(0, common_1.Body()), __param(1, common_1.Param('id'))
    ], CoursesController.prototype, "editCourse");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], CoursesController.prototype, "deleteCourse");
    __decorate([
        common_1.Get()
    ], CoursesController.prototype, "getAllCourses");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], CoursesController.prototype, "getOneCourse");
    CoursesController = __decorate([
        common_1.Controller('/courses')
    ], CoursesController);
    return CoursesController;
}());
exports.CoursesController = CoursesController;
