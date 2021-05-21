import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./user/main-layout/main-layout.component";
import {CategoriesPageComponent} from "./user/categories-page/categories-page.component";
import {CartPostsPageComponent} from "./user/cart-posts-page/cart-posts-page.component";
import {PostPageComponent} from "./user/post-page/post-page.component";
import {CommentsPageComponent} from "./user/comments-page/comments-page.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},

      {path: '', component: CategoriesPageComponent},
      {path: 'posts', component: CartPostsPageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'comments/post/:id', component: CommentsPageComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
