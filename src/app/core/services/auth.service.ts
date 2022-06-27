import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserModel} from "../models/user.model";
import {lastValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  async login(): Promise<UserModel> {
   return await lastValueFrom(this.http.get<UserModel>('http://localhost:3000/users/1'));
  }
}
