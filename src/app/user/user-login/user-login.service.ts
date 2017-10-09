import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from '../user.model/user.model';
import { UserData } from '../user.model/user-data.model';


@Injectable()
export class UserLoginService {

    private loginUserName: Subject<User> = new Subject<User>();
    public isLogin = false;
    public get currentUser(): Observable<User> {
        return this.loginUserName.asObservable();
    }

    constructor( private http: HttpClient ) { }

    login(user: User): Observable<User> {
        return this.http.post<UserData>('/userLogin', {name: user.name, password: user.password})
        .map(res => {
            this.isLogin = true;
            this.loginUserName.next(Object.assign({}, res.data));
            return res.data;
        })
        .catch((error: any) => Observable.throw(error || 'service error'));
    }

    logout(): void {
        this.isLogin = false;
        this.loginUserName.next(Object.assign({}));
    }
}
