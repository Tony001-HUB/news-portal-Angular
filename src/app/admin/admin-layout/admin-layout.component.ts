import { Component, OnInit } from '@angular/core';
import {AuthAdminService} from "../../service/auth-admin.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  constructor(public authAdminService: AuthAdminService, public router: Router) { }

  ngOnInit(): void {
  }

  logout($event) {
    $event.preventDefault();
    this.authAdminService.logout();
    this.router.navigate(['/admin']);
  }
}
