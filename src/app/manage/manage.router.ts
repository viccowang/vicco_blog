import { Routes } from '@angular/router';

import { ManageAuthGuardService } from './auth-guard/auth-guard.service';

import { BlogManageComponent } from './manage.component';
import { PostManagementComponent } from './post-management/post-management.component';

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
                    { path: 'post-manage/:page', component: PostManagementComponent }
                ]
            }
        ]
    }
];
