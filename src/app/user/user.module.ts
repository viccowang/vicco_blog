import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes';

import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserLoginComponent
  ]
})
export class UserModule { }
