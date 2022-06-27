import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserModel} from "../../../core/models/user.model";
import {AuthService} from "../../../core/services/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form: FormGroup;
  minPw = 8;
  registerUser: UserModel | undefined;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minPw)]],
      retypedPassword: ['', [Validators.required, Validators.minLength(this.minPw)]]
    })
  }

  get email() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get retypedPassword() {
    return this.form.get('retypedPassword');
  }

  checkPasswords() : boolean {
    if(this.password?.value.length > 0 && this.retypedPassword?.value.length > 0)
      if(this.password?.value === this.retypedPassword?.value)
        return true;

    return false;
  }

  async submit() {
    if (this.checkPasswords()) {
      const data = this.form.value;
      this.registerUser = {
        username: data.username,
        password: data.password
      }

      await this.authService.signup(this.registerUser).then(userCredential => {
        this.router.navigateByUrl('login').then();
      }).catch((error) => {
        console.log(error);
      });
    }
  }

}
