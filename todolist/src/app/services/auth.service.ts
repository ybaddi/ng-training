import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private frAuth: AngularFireAuth) { }

  login(user:User){
    return this.frAuth.signInWithEmailAndPassword(user.email,user.password); 
  }

  isAuthonticated(){
    return this.frAuth.user;
  }

}
