import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// 导入 Observable 操作符
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// 导入 Mock 随机测试数据
import { MockData } from '../../mock-data/post.data';

import { Post } from './post-model/post.model';
import { PostData } from './post-model/post-data.model';

@Injectable()
export class PostService {

    constructor(
        private http: HttpClient,
        private mockData: MockData,
    ) { }

    getPostList(page: string): Observable<Post[]> {
        return this.http.post<PostData>(`${this.mockData.baseURL}/postData/getPost`, {'page': page})
            .map(res => res.data)
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }

    getHotPost(): Observable<Post[]> {
        return this.http.get<PostData>(`${this.mockData.baseURL}/postData/getHotPost`)
            .map(res => res.data)
            .catch((error: any) => Observable.throw(error || 'service error'));
    }

    getPostDetail(postId: string): Observable<Post> {
        return this.http.post<PostData>(`${this.mockData.baseURL}/postData/getPostDetail`, {postId: postId})
            .map(res => res.data)
            .catch((error: any) => Observable.throw(error || 'Server error.'));
    }
}
