import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UsersService} from "../../../service/users.service";
import {User} from "../../../models/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() OnFormSubmit = new EventEmitter();
  @Input() public user: User;
  public formGroup: FormGroup;
  constructor(private usersService: UsersService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      userName: [this.user.userName],
      email: [this.user.email],
      phoneNumber: [this.user.phoneNumber],
      userId: [this.user.userId]
    })
  }

  submit() {
    this.OnFormSubmit.emit(this.formGroup.value);
  }
}
