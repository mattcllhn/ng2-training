import{Component }from '@angular/core';
import{User }from './shared/models/user';



@Component({
  selector:'my-app',
  template: `
    <header>

      <nav class = "navbar navbar-inverse">

        <div class = "navbar-header">
          <a href = "/" class = "navbar-brand">My Angular2 App!</a>
        </div>
      </nav>
    </header>

    <main>
    <div class = "row">
      <div class = "col-sm-4">
      <ul class = "list-group users-list"  *ngFor = "let user of users">
        <li class = "list-group-item" (click) = "selectUser(user)"
          [class.active]= "user===activeUser">
        {{message}}, {{user.username}}.
        I know your real name is {{user.name}}
        </li>


      </ul>
      </div>
      <div class = "col-sm-8">
        <div class = "jumbotron">
          <h1 *ngIf = "activeUser == undefined">Welcome to My Angular2 App!</h1>
            <div *ngIf = "activeUser">
            <button class = "btn btn-xs pull-right" (click) = "clearUser()">CLEAR</button>
              <h3>{{message}} {{activeUser.username}}</h3>
              <p>His real name is {{activeUser.name}}</p>
            </div>
        </div>
      </div>
    </div>


    </main>
    <footer class = "text-center">
    Copyright &copy; 2016
    </footer>
    `,
    styles:[`
      .users-list{
        cursor:pointer;
      }
      
      `]


})

export class AppComponent{
    message: string = "Hello";
    users : User[] = [
              {id:12, name:'Chris', username:'XxsKILLosaurus_RexxX420'},
              {id:12, name:'Pete', username:'__theGrImRePetEr'},
              {id:12, name:'Matt', username:'_-_YOMAMA_-_'}
            ]
    activeUser: User[];
    selectUser(userIn){
      this.activeUser = userIn;
    }
    clearUser(){
      this.activeUser = undefined;
    }

}
