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
var AppComponent = (function () {
    function AppComponent() {
        this.users = [];
    }
    AppComponent.prototype.saveContact = function (user) {
        this.users.push(user);
    };
    AppComponent.prototype.onDelete = function (user) {
        this.users = this.users.filter(function (i) { return i !== user; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h2> Todo List </h2>\n        <my-form (saveContact)=\"saveContact($event)\"> </my-form>\n        <my-contact-list [items]=\"users\" (onDelete)=\"onDelete($event)\"> </my-contact-list>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
//# sourceMappingURL=app.component.js.map