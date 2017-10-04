import { Routes } from '@angular/router';

import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BlogCommitComponent } from './commit/commit.component';
import { AboutmeComponent } from './about-me/about-me.component';


export const BlogRoutes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'work-experience',
        component: WorkExperienceComponent
    },
    {
        path: 'commit',
        component: BlogCommitComponent
    },
    {
        path: 'about-me',
        component: AboutmeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: '**',
        redirectTo: './home/home.module#HomeModule'
    }
];
