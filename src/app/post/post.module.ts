import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { postRouter } from './post.router';
import { PostService } from './post.service';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { SmallListComponent } from './small-list/small-list.component';

@NgModule({
    declarations: [
        PostListComponent,
        PostDetailComponent,
        SmallListComponent,
    ],
    imports: [
        CommonModule,
        NgbPaginationModule,
        RouterModule.forChild(postRouter)
    ],
    providers: [
        PostService
    ]
})

export class PostModule { }
