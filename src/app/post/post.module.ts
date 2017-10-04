import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { postRouter } from './post.router';
import { PostService } from './post.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

@NgModule({
    declarations: [
        PostListComponent,
        PostDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(postRouter)
    ],
    providers: [
        PostService
    ]
})

export class PostModule { }
