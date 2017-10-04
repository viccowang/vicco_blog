import { HomeComponent } from './home.component';

export const homeRouter = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', loadChildren: '../post/post.module#PostModule'}
        ]
    }
];
