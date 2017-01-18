"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var UserFormComponent = (function () {
    function UserFormComponent() {
    }
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        template: "\n    <form>\n      <div class = \"form-group\">\n        <input type = \"text\" class = \"form-control\" name = \"name\" required />\n      </div>\n      <div class = \"form-group\">\n        <input type = \"text\" class = \"form-control\" name = \"userName\" required />\n      </div>\n      <button type = \"submit\" class = \"btn btn-lg btn-block btn-primary\">\n        CREATE USER\n      </button>\n    </form>\n  ",
        styles: ["\n    form {\n      padding : 5px;\n      background-color: #ecf0f1;\n      border-radius : 3px;\n    }\n    "],
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=userForm.component.js.map