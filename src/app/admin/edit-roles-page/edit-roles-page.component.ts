import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Response} from "../../models/response";
import {Role} from "../../models/role";
import {RolesService} from "../../service/roles.service";
import {PageOptions} from "../../models/pageOptions";

@Component({
  selector: 'app-roles-page',
  templateUrl: './edit-roles-page.component.html',
  styleUrls: ['./edit-roles-page.component.css']
})
export class EditRolesPageComponent implements OnInit {

  role$: Observable<Response<Role>>;
  private pageNumber = 1;
  constructor(private rolesService: RolesService) { }

  ngOnInit(): void {
    this.role$ = this.rolesService.getRoles(this.pageNumber, PageOptions.pageSize);
  }

  editRole($event: Role) {

  }
}
