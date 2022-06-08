import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import { UserFirebase } from '../models/user-firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any;
  constructor(private frAuth: AngularFireAuth) { 
    this.frAuth.authState.subscribe((user) => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  login(user:User){
    return this.frAuth.signInWithEmailAndPassword(user.email,user.password); 
  }

  register(user:User){
    return this.frAuth.createUserWithEmailAndPassword(user.email,user.password); 
  }

  isAuthonticated(){
    return this.frAuth.user;
  }

  logout(){
    return this.frAuth.signOut();
  }

  // Returns true when user is looged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }
}
