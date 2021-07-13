import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse, HttpClient,
} from '@angular/common/http';
import {from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthAdminService} from "../service/auth-admin.service";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(public router: Router, private http: HttpClient, private authAdminService: AuthAdminService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(
          (error: HttpErrorResponse) => this.handleHttpError(error)
        )
      );
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<any> {
    switch (error.status) {
      case 401:
        this.authAdminService.updatingAuth();
        return from(
          this.router.navigateByUrl(`/admin/categories`)
        );
      default:
        return throwError(error);
    }
  }
}
