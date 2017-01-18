"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.newUser = new user_1.User();
        this.active = true;
    }
    UserFormComponent.prototype.createUser = function (data) {
        var _this = this;
        console.log(this.newUser);
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        template: "\n    <form #formVar = \"ngForm\" (ngSubmit) = \"createUser()\" *ngIf = \"active\">\n    {{formVar.valid}}\n      <div class = \"form-group\" [ngClass] = \"{'has-error': name.invalid && name.touched}\">\n        <span class = \"help-block\" *ngIf = \"name.invalid && name.touched\">NAME IS REQUIRED</span>\n\n        <input type = \"text\" placeholder = \"NAME\" class = \"form-control\" name = \"name\" required\n        [(ngModel)] = \"newUser.name\" #name = \"ngModel\"\n        />\n      </div>\n      <div class = \"form-group\" [ngClass] = \"{'has-error': userName.invalid && userName.touched}\">\n        <span class = \"help-block\" *ngIf = \"userName.invalid && userName.touched\">USERNAME IS REQUIRED</span>\n        <input type = \"text\" placeholder = \"USERNAME\" class = \"form-control\" name = \"userName\" required\n        [(ngModel)] = \"newUser.userName\" #userName = \"ngModel\"\n        />\n      </div>\n      <button type = \"submit\"  class = \"btn btn-lg btn-block btn-primary\" [disabled] = \"formVar.invalid\">\n        CREATE USER\n      </button>\n    </form>\n  ",
        styles: ["\n    form {\n      padding : 5px;\n      background-color: #ecf0f1;\n      border-radius : 3px;\n    }\n    "],
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=userForm.component.js.map