import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'firebase';
import {User} from './models/user'
import { resolve } from 'url';
import { reject } from 'q';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,private afs:AngularFirestore) {}

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
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(userData => resolve(userData),
    err => reject(err));
  });
  }
  logoutUser(){
    return this.afAuth.auth.signOut();
  }

  loginGoogleUser(){
 return this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  /*
  private updateUserData(user){
    const userRef = AngularFirestoreDocument<any> = this.afs.doc('users/'+user.id);
    const data : User  ={
      id : user.id,
      email: user.email,
      roles: {
        editor :true
      }
    }
  }*/
}
