import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../service/users.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit {

  public formGroup: FormGroup;
  added = '';
  constructor(private formBuilder: FormBuilder, private usersService: UsersService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userName: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      phoneNumber: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.minLength(10)]]
    })
  }

  submit() {
    this.usersService.postUser(
      this.formGroup.value.userName,
      this.formGroup.value.email,
      this.formGroup.value.phoneNumber,
      this.formGroup.value.password
    ).subscribe();
    this.formGroup.reset();
    this.added = 'Registration completed';
  }

}
