import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EditCategoriesComponent } from './edit-categories/edit-categories.component';
import { EditCommentsComponent } from './edit-comments/edit-comments.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { EditCommentRateComponent } from './edit-comment-rate/edit-comment-rate.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    EditCategoriesComponent,
    EditCommentsComponent,
    EditPostsComponent,
    EditCommentRateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: '', component: LoginPageComponent },
          { path: 'edit-categories', component: EditCategoriesComponent },
          { path: 'edit-comment-rate', component: EditCommentRateComponent },
          { path: 'edit-comments', component: EditCommentsComponent },
          { path: 'edit-posts', component: EditPostsComponent },
        ]}
    ])
  ]
})
export class AdminModule { }
