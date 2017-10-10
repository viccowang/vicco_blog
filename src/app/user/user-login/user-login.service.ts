import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../user.model/user.model';
import { UserData } from '../user.model/user-data.model';
import { UserAuthGuardService } from '../auth-guard/auth-guard.service';

// 导入 Mock 随机测试数据
import { MockData } from '../../../mock-data/post.data';

@Injectable()
export class UserLoginService {
    // login user subject object, can be subcribed
    private loginUserName: Subject<User> = new Subject<User>();
    // login user observable object
    public get currentUser(): Observable<User> {
        return this.loginUserName.asObservable();
    }
    constructor(
        private http: HttpClient,
        private userAuthGuardService: UserAuthGuardService,
        private router: Router,
        private mockData: MockData,
    ) { }

    login(user: User): Observable<User> {
        return this.http.post<UserData>(`${this.mockData.baseURL}/userLogin`, {name: user.name, password: user.password})
        .map(res => {
            this.userAuthGuardService.isLogin = true;
            window.sessionStorage.setItem('userName', res.data.name);
            return this.loginUserName.next(Object.assign({}, res.data));
        })
        .catch((error: any) => Observable.throw(error || 'service error'));
    }

    logout(): void {
        this.userAuthGuardService.isLogin = false;
        window.sessionStorage.removeItem('userName');
        this.loginUserName.next(Object.assign({}));
        this.router.navigate(['/login']);
    }
}
