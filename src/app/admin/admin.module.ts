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
import { EditRolesPageComponent } from './edit-roles-page/edit-roles-page.component';
import {RolesService} from "../service/roles.service";
import { RoleFormComponent } from './forms/role-form/role-form.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import {AuthGuard} from "../guards/auth.guard";

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
    EditRolesPageComponent,
    RoleFormComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent, children: [
          { path: '', redirectTo: 'admin/login', pathMatch: 'full' },
          { path: '', component: LoginPageComponent },
          { path: 'dashboard', component: DashboardPageComponent, canActivate: [AuthGuard] },
          { path: 'edit-category/:id', component: EditCategoryComponent, canActivate: [AuthGuard] },
          { path: 'edit-comment-rate', component: EditCommentRateComponent, canActivate: [AuthGuard] },
          { path: 'edit-comment', component: EditCommentComponent, canActivate: [AuthGuard] },
          { path: 'edit-post/:id', component: EditPostComponent, canActivate: [AuthGuard] },
          { path: 'posts', component: CardPostsPageComponent, canActivate: [AuthGuard] },
          { path: 'categories', component: CardCategoriesPageComponent, canActivate: [AuthGuard] },
          { path: 'edit-post/:id/by/category', component: EditPostCategoryComponent, canActivate: [AuthGuard]},
          { path: 'new-category', component: CreateNewCategoryComponent, canActivate: [AuthGuard]},
          { path: 'new-post', component: CreateNewPostComponent, canActivate: [AuthGuard]},
          { path: 'registration', component: RegistrationPageComponent, canActivate: [AuthGuard]},
          { path: 'users', component: EditUsersPageComponent, canActivate: [AuthGuard]},
          { path: 'roles', component: EditRolesPageComponent, canActivate: [AuthGuard]},
        ]}
    ])
  ]
})
export class AdminModule { }
