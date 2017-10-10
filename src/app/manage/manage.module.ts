import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { manageRouters } from './manage.router';

import { BlogManageComponent } from './manage.component';
import { PostManageComponent } from './post-manage/post-manage.component';
import { ReplyManageComponent } from './reply-manage/reply-manage.component';
import { CommitManageComponent } from './commit-manage/commit-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { BaseManageComponent } from './base-manage/base-manage.component';


@NgModule({
    declarations: [
        BlogManageComponent,
        PostManageComponent,
        ReplyManageComponent,
        CommitManageComponent,
        UserManageComponent,
        BaseManageComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(manageRouters)
    ],
    providers: []
})
export class ManageModule { }
