import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { manageRouters } from './manage.router';

import { BlogManageComponent } from './manage.component';
import { PostManagementComponent } from './post-management/post-management.component';

@NgModule({
    declarations: [
        BlogManageComponent,
        PostManagementComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(manageRouters)
    ],
    providers: []
})
export class ManageModule { }
