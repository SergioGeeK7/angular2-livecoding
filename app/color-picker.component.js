"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ColorPicker = (function () {
    function ColorPicker() {
        this.colors = ["black", "red", "yellow", "blue", "white"];
        this.selectedColor = new core_1.EventEmitter();
    }
    ColorPicker.prototype.onSelected = function (color) {
        this.selectedColor.emit(color);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ColorPicker.prototype, "selectedColor", void 0);
    ColorPicker = __decorate([
        core_1.Component({
            selector: 'color-picker',
            moduleId: module.id,
            templateUrl: 'color-picker.component.html',
            styles: ["\n    .color{\n        width:24px;\n        height:24px;\n        display:inline-block;\n        border-radius:100%;\n        text-align:center;\n    }\n    \n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorPicker);
    return ColorPicker;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ColorPicker;
//# sourceMappingURL=color-picker.component.js.map