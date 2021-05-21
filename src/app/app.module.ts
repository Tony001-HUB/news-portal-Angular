import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './user/main-layout/main-layout.component';
import { CategoriesPageComponent } from './user/categories-page/categories-page.component';
import { PostPageComponent } from './user/post-page/post-page.component';
import { CommentsPageComponent } from './user/comments-page/comments-page.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { CartPostsPageComponent } from './user/cart-posts-page/cart-posts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    CategoriesPageComponent,
    PostPageComponent,
    CommentsPageComponent,
    LoginPageComponent,
    CartPostsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
