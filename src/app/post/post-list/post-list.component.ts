import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Post } from '../post-model/post.model';
import { PostService } from '../post.service';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
    listHeaderName = '最近热门';
    postList: Post[];
    contentList: Post[] = [];
    currentPage: string;

    constructor(
        private router: Router,
        private activeRouter: ActivatedRoute,
        private postService: PostService,
    ) { }

    ngOnInit() {
        this.activeRouter.params.subscribe(params => {
            // 当前页
            this.currentPage = params.page;
            // 获取blog数据
            this.getPostList(params.page);
        });
        // 获取热门文章
        this.postService.getHotPost().subscribe(data => {
            this.contentList = data;
        });
    }

    /**
     * 通过页码获取当前页的blog数据
     * @param page
     */
    getPostList(page: string) {
        this.postService.getPostList(page).subscribe(data => {
            this.postList = data;
        });
    }

    switchPage(pageNumber: number) {
        console.log(pageNumber);
        this.router.navigate(['/home/page', pageNumber]);
    }

    showSideBlogDetail(postId: string) {
        // 
    }
}
