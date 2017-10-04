import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import '../../mock-data/post.data';

import { Post } from './post-model/post.model';

@Injectable()
export class PostService {

    constructor(private http: Http) { }

    getPostList(page: string): Observable<Post[]> {
        return this.http.get('/postData/getPost')
            .map(res => res.json().data as Post[])
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }

    getPostDetail(postId: string): Observable<Post> {
        const url = `/postData/getPostDetail/${postId}`;
        return this.http.get(url)
            .map(res => res.json().data as Post)
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }
}
