import {Component} from '@angular/core';
import {User} from '../shared/models/user';

@Component({
  selector: 'user-form',
  template:`
    <form>
      <div class = "form-group">
        <input type = "text" class = "form-control" name = "name" required />
      </div>
      <div class = "form-group">
        <input type = "text" class = "form-control" name = "userName" required />
      </div>
      <button type = "submit" class = "btn btn-lg btn-block btn-primary">
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
export class UserFormComponent{}
