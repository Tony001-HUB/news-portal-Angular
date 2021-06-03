import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { EditCommentComponent } from './edit-comment/edit-comment.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { EditCommentRateComponent } from './edit-comment-rate/edit-comment-rate.component';
import { CardCategoriesPageComponent } from './card-categories-page/card-categories-page.component';
import { CardPostsPageComponent } from './card-posts-page/card-posts-page.component';
import {PostPageComponent} from "../user/post-page/post-page.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { PostFormComponent } from './forms/post-form/post-form.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    EditCategoryComponent,
    EditCommentComponent,
    EditPostComponent,
    EditCommentRateComponent,
    CardCategoriesPageComponent,
    CardPostsPageComponent,
    CategoryFormComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: '', component: LoginPageComponent },
          { path: 'edit-category/:id', component: EditCategoryComponent },
          { path: 'edit-comment-rate', component: EditCommentRateComponent },
          { path: 'edit-comment', component: EditCommentComponent },
          { path: 'edit-post/:id', component: EditPostComponent },
          { path: 'posts', component: CardPostsPageComponent },
          { path: 'categories', component: CardCategoriesPageComponent }
        ]}
    ])
  ]
})
export class AdminModule { }
