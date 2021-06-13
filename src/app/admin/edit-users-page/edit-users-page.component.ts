import { Component, NgIterable, OnInit } from '@angular/core';
import {UsersService} from "../../service/users.service";
import {Observable} from "rxjs";
import {User} from "../../models/user";
import {Response} from "../../models/response";
import {PageOptions} from "../../models/pageOptions";
import {map, shareReplay} from 'rxjs/operators';
import {Post} from "../../models/post";

@Component({
  selector: 'app-edit-users-page',
  templateUrl: './edit-users-page.component.html',
  styleUrls: ['./edit-users-page.component.css']
})
export class EditUsersPageComponent implements OnInit {

  public user$: Observable<Response<User>>;
  public pageNumber = 1;
  public currentPageNumber = 1;
  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.user$ = this.usersService.getUsers(this.pageNumber, PageOptions.pageSize);
  }

  editUser($event: User) {
    this.usersService.putUser($event.userId, $event).subscribe({
      next: () => console.log('edit completed'),
      error: (data) => console.log(`error: ${data}`)
    });
  }

  getButtonNumbersArray(totalPagesCount: number): number[] {
    let arr = [];

    for(let i = 1; i <= totalPagesCount; i++) {
      arr.push(i);
    }

    return arr;
  }

  btnClick(pageNumber: number) {
    this.currentPageNumber = pageNumber;
    this.user$ = this.usersService.getUsers(pageNumber, PageOptions.pageSize);
  }

  prevBtnClick() {
    this.user$ = this.usersService.getUsers(this.currentPageNumber--, PageOptions.pageSize);
  }

  nextBtnClick() {
    this.user$ = this.usersService.getUsers(this.currentPageNumber++, PageOptions.pageSize);
  }
}
