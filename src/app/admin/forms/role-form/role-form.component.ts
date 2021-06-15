import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Role} from "../../../models/role";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  @Input() public roles: Role;
  @Output() OnFormSubmit = new EventEmitter();
  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [this.roles.name, [Validators.required, Validators.minLength(2), Validators.maxLength(25)]]
    })
  }

  submit() {
    this.OnFormSubmit.emit(this.formGroup.value);
  }
}
