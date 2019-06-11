import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private afsAuth: AngularFireAuth) {}

  login(){
    console.log('Redireccionando..');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }

  getLoggedInUser(){
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }

  emailSignUp(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  verifyEmail() {
    this.afAuth.authState.subscribe(
      (user) => user.sendEmailVerification().then(
        () => console.log('email sent')));
  }

  loginEmailUser(email:string, password: string){
  return new Promise((resolve , reject ) =>{
    this.afsAuth.auth.signInWithEmailAndPassword(email,password).then(userData => resolve(userData),
    err => reject(err));
  });
  }
  logoutUser(){
    return this.afsAuth.auth.signOut();
  }

  loginGoogleUser(){
 return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
}
