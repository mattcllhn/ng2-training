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
    <div  *ngFor = "let user of users" class = "jumbotron">
      <h1>{{message}}, {{user.username}}</h1>
      <p>I know your real name is {{user.name}}</p>


    </div>
    <footer class = "text-center">
    Copyright &copy; 2016
    </footer>
    `


})

export class AppComponent{
    message = "Hello";
    users = [
      {id:12, name:'Chris', username:'XxsKILLosaurus_RexxX420'},
      {id:12, name:'Pete', username:'__theGrImRePetEr'},
      {id:12, name:'Matt', username:'_-_YOMAMA_-_'}
  ]

}
