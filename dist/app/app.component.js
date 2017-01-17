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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <header>\n\n      <nav class = \"navbar navbar-inverse\">\n\n        <div class = \"navbar-header\">\n          <a href = \"/\" class = \"navbar-brand\">My Angular2 App!</a>\n        </div>\n      </nav>\n    </header>\n    <div  *ngFor = \"let user of users\" class = \"jumbotron\">\n      <h1>{{message}}, {{user.username}}</h1>\n      <p>I know your real name is {{user.name}}</p>\n\n\n    </div>\n    <footer class = \"text-center\">\n    Copyright &copy; 2016\n    </footer>\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map