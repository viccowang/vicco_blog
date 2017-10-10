import { Injectable } from '@angular/core';


@Injectable()
export class UserAuthGuardService {
    /**
     * 是否登录判断
     * 目前是用浏览器sessionStorage进行模拟登录判断
     */
    public get isLogin(): boolean {
        return !!window.sessionStorage.getItem('isLogin');
    }
    public set isLogin(loginStatus: boolean) {
        if (!loginStatus) {
            window.sessionStorage.removeItem('isLogin');
        } else {
            window.sessionStorage.setItem('isLogin', String(loginStatus));
        }
    }
    // 配置一个重定向URL
    public redirectURL: string;
}
