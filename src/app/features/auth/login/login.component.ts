import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {UserModel} from "../../../core/models/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService,
              private route: Router) { }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      let userModel: UserModel = {
        username: this.form.get('username')?.value,
        password: this.form.get('password')?.value
      }

      await this.authService.login(userModel).then(user => {
        user.user?.getIdToken().then( token => {
          sessionStorage.setItem('token', token);
        });
        this.route.navigateByUrl('/home').then();
      }).catch(reason => {
        console.log(reason);
      });
    }
  }

}
