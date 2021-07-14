import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse, HttpClient,
} from '@angular/common/http';
import {Observable, throwError } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import {Router} from "@angular/router";
import {AuthAdminService} from "../service/auth-admin.service";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(public router: Router, private http: HttpClient, private authAdminService: AuthAdminService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError(
          (error: HttpErrorResponse) => this.handleHttpError(error, next, request)
        )
      );
  }

  private handleHttpError(
    error: HttpErrorResponse,
    next: HttpHandler,
    request: HttpRequest<unknown>
  ): Observable<any> {
    switch (error.status) {
      case 401:
        return this.authAdminService.updatingAuth().pipe(
          tap(v => {
            this.authAdminService.setToken(v);
          }),
          switchMap(() => {
            return this.getRequest(request, next)
          })
        )
      default:
        return throwError(error);
    }
  }

  private getRequest(request: HttpRequest<any>, next: HttpHandler) {
    const accessToken = localStorage.getItem('jwt-token')
    if (accessToken) {
      return next.handle(request.clone({ headers: request.headers.set('Authorization', `Bearer ${ accessToken }`) }))
    }
    return next.handle(request)
  }
}
