import{Component }from '@angular/core';
import{User }from './shared/models/user';



@Component({
  selector:'my-app',
  templateUrl:'./app/app.component.html',//need to look at srcing because app.module.js is file launched
    styleUrls:['./app/app.component.css']
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
