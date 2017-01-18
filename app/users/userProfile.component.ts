import{Component, Input} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
  selector: 'user-profile',
  template:`
  <div class = "jumbotron">
    <h1 *ngIf = "user == undefined">Welcome to My Angular2 App!</h1>
      <div *ngIf = "user">
      <button class = "btn btn-xs pull-right" (click) = "clearUser()">CLEAR</button>
        <h3>{{message}} {{user.username}}</h3>
        <p>His real name is {{user.name}}</p>
        <input class = "form-control" [(ngModel)] = "user.name" />
      </div>
  </div>
  `
})

export class UserProfileComponent{
  @Input() user : User;

  clearUser(){
    this.user = undefined;
  }
}
