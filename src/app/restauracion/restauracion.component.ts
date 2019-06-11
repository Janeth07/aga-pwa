import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-restauracion',
  templateUrl: './restauracion.component.html',
  styleUrls: ['./restauracion.component.scss']
})
export class RestauracionComponent implements OnInit {


  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  emailSignUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        this.verifyEmail();
      }
    );
  }
  verifyEmail() {
    this.afAuth.authState.subscribe(
      (user) => user.sendEmailVerification().then(
        () => console.log('email sent')));
  }
}
