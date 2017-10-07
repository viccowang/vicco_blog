import { Routes } from '@angular/router';

import { BlogManageComponent } from './manage.component';
import { PostManagementComponent } from './post-management/post-management.component';

export const manageRouters: Routes = [
    {
        path: '',
        component: BlogManageComponent,
        children: [
            { path: '', redirectTo: 'post-manage/1', pathMatch: 'full' },
            { path: 'post-manage/:page', component: PostManagementComponent }
        ]
    }
];
