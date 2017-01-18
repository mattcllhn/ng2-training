import {Component} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
  selector: 'user-form',
  template:`
    <form #formVar = "ngForm" (ngSubmit) = "createUser()" *ngIf = "active">
    {{formVar.valid}}
      <div class = "form-group" [ngClass] = "{'has-error': name.invalid && name.touched}">
        <span class = "help-block" *ngIf = "name.invalid && name.touched">NAME IS REQUIRED</span>

        <input type = "text" placeholder = "NAME" class = "form-control" name = "name" required
        [(ngModel)] = "newUser.name" #name = "ngModel"
        />
      </div>
      <div class = "form-group" [ngClass] = "{'has-error': userName.invalid && userName.touched}">
        <span class = "help-block" *ngIf = "userName.invalid && userName.touched">USERNAME IS REQUIRED</span>
        <input type = "text" placeholder = "USERNAME" class = "form-control" name = "userName" required
        [(ngModel)] = "newUser.userName" #userName = "ngModel"
        />
      </div>
      <button type = "submit"  class = "btn btn-lg btn-block btn-primary" [disabled] = "formVar.invalid">
        CREATE USER
      </button>
    </form>
  `,
  styles : [`
    form {
      padding : 5px;
      background-color: #ecf0f1;
      border-radius : 3px;
    }
    `],
})
export class UserFormComponent{
  newUser : User = new User();
  active:boolean = true;

  createUser(data){
    console.log(this.newUser);

    this.newUser = new User();
    this.active = false;
    setTimeout(()=> this.active = true,0);

  }
}
