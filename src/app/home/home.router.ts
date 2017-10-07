import { HomeComponent } from './home.component';

export const homeRouter = [
    {
        path: '',
        component: HomeComponent,
        loadChildren: '../post/post.module#PostModule'
    }
];
