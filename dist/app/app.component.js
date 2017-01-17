"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Hello";
        this.users = [
            { id: 12, name: 'Chris', username: 'XxsKILLosaurus_RexxX420' },
            { id: 12, name: 'Pete', username: '__theGrImRePetEr' },
            { id: 12, name: 'Matt', username: '_-_YOMAMA_-_' }
        ];
    }
    AppComponent.prototype.selectUser = function (userIn) {
        this.activeUser = userIn;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n\n      <nav class = \"navbar navbar-inverse\">\n\n        <div class = \"navbar-header\">\n          <a href = \"/\" class = \"navbar-brand\">My Angular2 App!</a>\n        </div>\n      </nav>\n    </header>\n\n    <main>\n    <div class = \"row\">\n      <div class = \"col-sm-4\">\n      <ul class = \"list-group users-list\"  *ngFor = \"let user of users\">\n        <li class = \"list-group-item\" (click) = \"selectUser(user)\">\n        {{message}}, {{user.username}}.\n        I know your real name is {{user.name}}\n        </li>\n\n\n      </ul>\n      </div>\n      <div class = \"col-sm-8\">\n        <div class = \"jumbotron\">\n          <h1>My Angular2 App!</h1>\n            <div *ngIf = \"activeUser\">\n              <h4>Behold {{activeUser.username}}</h4>\n              <p>Their real name is {{activeUser.name}}</p>\n            </div>\n        </div>\n      </div>\n    </div>\n\n\n    </main>\n    <footer class = \"text-center\">\n    Copyright &copy; 2016\n    </footer>\n    ",
        styles: []
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map