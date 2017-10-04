import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


export const postRouter = [
    {
        path: '',
        redirectTo: 'page/1',
        pathMatch: 'full'
    },
    {
        path: 'page/:page',
        component: PostListComponent
    },
    {
        path: 'page/detail/:postId',
        component: PostDetailComponent
    }
];
