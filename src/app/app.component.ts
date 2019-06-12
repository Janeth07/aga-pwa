import { Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: firebase.User;
  constructor(private afAuth: AngularFireAuth, private authService: AuthService ){
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {  console.log(user);
    this.user = user;
})
  }

}
