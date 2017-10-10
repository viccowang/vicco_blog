import { Routes } from '@angular/router';

import { ManageAuthGuardService } from './auth-guard/auth-guard.service';

import { BlogManageComponent } from './manage.component';
import { PostManageComponent } from './post-manage/post-manage.component';
import { ReplyManageComponent } from './reply-manage/reply-manage.component';
import { CommitManageComponent } from './commit-manage/commit-manage.component';
import { UserManageComponent } from './user-manage/user-manage.component';
import { BaseManageComponent } from './base-manage/base-manage.component';

export const manageRouters: Routes = [
    {
        path: '',
        component: BlogManageComponent,
        canActivate: [ManageAuthGuardService],
        children: [
            {
                path: '',
                canActivateChild: [ManageAuthGuardService],
                children: [
                    { path: '', redirectTo: 'post-manage/1', pathMatch: 'full' },
                    { path: 'post-manage/:page', component: PostManageComponent }
                ]
            }
        ]
    }
];
