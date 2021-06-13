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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { PostFormComponent } from './forms/post-form/post-form.component';
import { EditPostCategoryComponent } from './edit-post-category/edit-post-category.component';
import { CreateNewCategoryComponent } from './create-new-category/create-new-category.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { CreateNewPostComponent } from './create-new-post/create-new-post.component';
import { EditUsersPageComponent } from './edit-users-page/edit-users-page.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { RolesPageComponent } from './roles-page/roles-page.component';
import {RolesService} from "../service/roles.service";

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
    PostFormComponent,
    EditPostCategoryComponent,
    CreateNewCategoryComponent,
    RegistrationPageComponent,
    CreateNewPostComponent,
    EditUsersPageComponent,
    UserFormComponent,
    RolesPageComponent
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
          { path: 'categories', component: CardCategoriesPageComponent },
          { path: 'edit-post/:id/by/category', component: EditPostCategoryComponent},
          { path: 'new-category', component: CreateNewCategoryComponent},
          { path: 'new-post', component: CreateNewPostComponent},
          { path: 'registration', component: RegistrationPageComponent},
          { path: 'users', component: EditUsersPageComponent},
          { path: 'roles', component: RolesPageComponent},
        ]}
    ])
  ]
})
export class AdminModule { }
