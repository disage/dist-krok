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
exports.SubjectController = void 0;
var common_1 = require("@nestjs/common");
var SubjectController = /** @class */ (function () {
    function SubjectController(subjectService) {
        this.subjectService = subjectService;
    }
    //     @Get(':id')
    //     getSubjects (@Param('id') id: ObjectId){
    //        return this.subjectService.getSubjects(id);
    //    }
    SubjectController.prototype.getAllSubjects = function () {
        return this.subjectService.getAllSubjects();
    };
    SubjectController.prototype.createSubject = function (dto) {
        return this.subjectService.createSubject(dto);
    };
    SubjectController.prototype.deleteCourse = function (id) {
        return this.subjectService.deleteSubject(id);
    };
    SubjectController.prototype.getSubjects = function (id) {
        return this.subjectService.getSubjects(id);
    };
    __decorate([
        common_1.Get()
    ], SubjectController.prototype, "getAllSubjects");
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], SubjectController.prototype, "createSubject");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], SubjectController.prototype, "deleteCourse");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], SubjectController.prototype, "getSubjects");
    SubjectController = __decorate([
        common_1.Controller('/subjects')
    ], SubjectController);
    return SubjectController;
}());
exports.SubjectController = SubjectController;
