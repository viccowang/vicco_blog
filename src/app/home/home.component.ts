import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';

import { HomeService } from './home.service';

import { Post } from '../post/post-model/post.model';

@Component({
    selector: 'blog-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    animations: [flyIn]
})
export class HomeComponent implements OnInit {
    listHeaderName = '最近热门';
    contentList: Post[] = [];

    constructor(private homeService: HomeService) { }

    ngOnInit() {
        this.homeService.getHotPost().subscribe(data => {
            this.contentList = data;
        });
    }

    listClick(postId: string) {
        console.log(postId);
    }

}
