import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './user/main-layout/main-layout.component';
import { CategoriesPageComponent } from './user/categories-page/categories-page.component';
import { PostsPageComponent } from './user/posts-page/posts-page.component';
import { CommentsPageComponent } from './user/comments-page/comments-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CategoriesPageComponent,
    PostsPageComponent,
    CommentsPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
