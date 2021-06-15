import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../service/users.service";
import {Router} from "@angular/router";
import {AuthAdminService} from "../../service/auth-admin.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authAdminService: AuthAdminService,
    private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required,  Validators.minLength(6)]],
    })
  }
  submit() {
    const user = {
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      returnSecureToken: true
    }

    this.authAdminService.authFireBase(user).subscribe(response =>
      {
        this.formGroup.reset()
        this.router.navigate(['/admin', 'dashboard'])
      }, () => {
        console.log(`error`)
      }
    );
  }
}
