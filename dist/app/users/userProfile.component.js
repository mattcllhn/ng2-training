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
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.clearUser = function () {
        this.user = undefined;
    };
    return UserProfileComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], UserProfileComponent.prototype, "user", void 0);
UserProfileComponent = __decorate([
    core_1.Component({
        selector: 'user-profile',
        template: "\n  <div class = \"jumbotron\">\n    <h1 *ngIf = \"user == undefined\">Welcome to My Angular2 App!</h1>\n      <div *ngIf = \"user\">\n      <button class = \"btn btn-xs pull-right\" (click) = \"clearUser()\">CLEAR</button>\n        <h3>{{message}} {{user.username}}</h3>\n        <p>His real name is {{user.name}}</p>\n        <input class = \"form-control\" [(ngModel)] = \"user.name\" />\n      </div>\n  </div>\n  "
    })
], UserProfileComponent);
exports.UserProfileComponent = UserProfileComponent;
//# sourceMappingURL=userProfile.component.js.map