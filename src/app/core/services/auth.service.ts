import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Observable} from "rxjs";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: Observable<firebase.User | null>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  login(user: UserModel) {
    return  this.angularFireAuth.signInWithEmailAndPassword(user.username, user.password);
  }

  signup(user: UserModel) {
    return this.angularFireAuth.createUserWithEmailAndPassword(user.username, user.password);
  }
}
