import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// 导入 Observable 操作符
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// 导入 Mock 随机测试数据
import '../../mock-data/post.data';

import { Post } from './post-model/post.model';
import { PostData } from './post-model/post-data.model';

@Injectable()
export class PostService {

    constructor(private http: HttpClient) { }

    getPostList(page: string): Observable<Post[]> {
        return this.http.get<PostData>('/postData/getPost')
            .map(res => res.data)
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }

    getPostDetail(postId: string): Observable<Post> {
        return this.http.post<PostData>('/postData/getPostDetail', { postId: postId})
            .map(res => res.data)
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }
}
