import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainLayoutComponent} from "./user/main-layout/main-layout.component";
import {CategoriesPageComponent} from "./user/categories-page/categories-page.component";
import {CardPostsPageComponent} from "./user/card-posts-page/card-posts-page.component";
import {PostPageComponent} from "./user/post-page/post-page.component";
import {CommentsPageComponent} from "./user/comments-page/comments-page.component";

const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},

      {path: '', component: CardPostsPageComponent},
      {path: 'categories', component: CategoriesPageComponent},
      {path: 'post/:id', component: PostPageComponent},
      {path: 'comments/post.ts/:id', component: CommentsPageComponent}
  ]},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
