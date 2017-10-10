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
<<<<<<< HEAD
            { path: '', redirectTo: 'post-manage/1', pathMatch: 'full' },
            { path: 'post-manage/:page', component: PostManageComponent },
            { path: 'reply-manage/:page', component: ReplyManageComponent },
            { path: 'commit-manage/:page', component: CommitManageComponent },
            { path: 'user-manage', component: UserManageComponent },
            { path: 'base-manage', component: BaseManageComponent},
=======
            {
                path: '',
                canActivateChild: [ManageAuthGuardService],
                children: [
                    { path: '', redirectTo: 'post-manage/1', pathMatch: 'full' },
                    { path: 'post-manage/:page', component: PostManagementComponent }
                ]
            }
>>>>>>> 5101f3a15ca70d084bcf85337ed0da5325f87b7f
        ]
    }
];
