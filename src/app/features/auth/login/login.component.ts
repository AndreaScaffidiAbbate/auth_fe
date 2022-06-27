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
      await this.authService.login().then(user => {
        if(user.username === this.form.get('username')?.value && user.password === this.form.get('password')?.value) {
          sessionStorage.setItem('token', 'uidhsdkjfsifdhusiujnoisfhzdkhviuashjziufaiu');
          sessionStorage.setItem('role', user.token.role);
          this.route.navigateByUrl('home');
        }
        else
          alert('utente non trovato');
      })
    }
  }
  @Input() error: string | null | undefined;

}
