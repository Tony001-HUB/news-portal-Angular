import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './user/main-layout/main-layout.component';
import { CategoriesPageComponent } from './user/categories-page/categories-page.component';
import { PostPageComponent } from './user/post-page/post-page.component';
import { CommentsPageComponent } from './user/comments-page/comments-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { CardPostsPageComponent } from './user/card-posts-page/card-posts-page.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommentsOfPostComponent } from './user/comments-of-post/comments-of-post.component';
import {AuthInterceptor} from "./interceptors/auth-interceptor.service";
import {ErrorHandlingInterceptor} from "./interceptors/error-handling-interceptor.service";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CategoriesPageComponent,
    PostPageComponent,
    CommentsPageComponent,
    LoginPageComponent,
    CardPostsPageComponent,
    CommentsOfPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
