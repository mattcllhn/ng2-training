import{Component }from '@angular/core';

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
        <li class = "list-group-item" (click) = "selectUser(user)">
        {{message}}, {{user.username}}.
        I know your real name is {{user.name}}
        </li>


      </ul>
      </div>
      <div class = "col-sm-8">
        <div class = "jumbotron">
          <h1>My Angular2 App!</h1>
            <div *ngIf = "activeUser">
              <h4>Behold {{activeUser.username}}</h4>
              <p>Their real name is {{activeUser.name}}</p>
            </div>
        </div>
      </div>
    </div>


    </main>
    <footer class = "text-center">
    Copyright &copy; 2016
    </footer>
    `,
    styles:[
      
    ]


})

export class AppComponent{
    message = "Hello";
    users = [
              {id:12, name:'Chris', username:'XxsKILLosaurus_RexxX420'},
              {id:12, name:'Pete', username:'__theGrImRePetEr'},
              {id:12, name:'Matt', username:'_-_YOMAMA_-_'}
            ]
    activeUser;
    selectUser(userIn){
      this.activeUser = userIn;
    }

}
