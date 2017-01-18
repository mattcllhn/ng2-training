import{Component }from '@angular/core';
import{User }from './shared/models/user';
// import{UserProfileComponent} from './users/userProfile.component';


@Component({
  selector:'my-app',
  templateUrl:'./app/app.component.html',//need to look at srcing because app.module.js is file launched
    styleUrls:['./app/app.component.css']
})

export class AppComponent{
    message: string = "Hello";
    users : User[] = [
              {id:12, name:'Chris', userName:'XxsKILLosaurus_RexxX420'},
              {id:12, name:'Pete', userName:'__theGrImRePetEr'},
              {id:12, name:'Matt', userName:'_-_YOMAMA_-_'}
            ]
    activeUser: User[];
    selectUser(userIn){
      this.activeUser = userIn;
    }
    onUserCreated(data){
      console.log(data.user);
      this.users.push(data.user);
    }


}
