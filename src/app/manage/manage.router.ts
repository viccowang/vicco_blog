import { Routes } from '@angular/router';

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
        children: [
            { path: '', redirectTo: 'post-manage/1', pathMatch: 'full' },
            { path: 'post-manage/:page', component: PostManageComponent },
            { path: 'reply-manage/:page', component: ReplyManageComponent },
            { path: 'commit-manage/:page', component: CommitManageComponent },
            { path: 'user-manage', component: UserManageComponent },
            { path: 'base-manage', component: BaseManageComponent},
        ]
    }
];
