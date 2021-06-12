import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../service/users.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Response} from "../../models/response";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-edit-users-page',
  templateUrl: './edit-users-page.component.html',
  styleUrls: ['./edit-users-page.component.css']
})
export class EditUsersPageComponent implements OnInit {

  public user$: Observable<Response<User>>;
  public pageNumber = 1;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.user$ = this.usersService.getUsers(this.pageNumber, PageOptions.pageSize);
  }

  editUser($event: User) {
    this.usersService.putUser($event.userId, $event).subscribe();
    location.reload();
  }

  previousBtnClick() {
    this.user$ = this.usersService.getUsers(--this.pageNumber, PageOptions.pageSize);
  }

  nextBtnClick() {
    this.user$ = this.usersService.getUsers(++this.pageNumber, PageOptions.pageSize);
  }
}
