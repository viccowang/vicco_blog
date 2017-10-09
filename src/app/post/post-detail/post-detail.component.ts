import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post-model/post.model';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
    public post: Post = new Post();

    constructor(
        private router: Router,
        private activedRouter: ActivatedRoute,
        private postService: PostService
    ) { }

    ngOnInit() {
        // this.activedRouter.params.subscribe(params => {
        //     this.getPostDetail(params.postId);
        // });
        this.activedRouter.paramMap.subscribe( params => {
            this.getPostDetail(params.get('postId'));
        });
    }

    getPostDetail(postId: string) {
        this.postService.getPostDetail(postId).subscribe(data => {
            this.post = data;
        });
    }

}
