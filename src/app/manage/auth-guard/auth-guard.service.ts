import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserAuthGuardService } from '../../user/auth-guard/auth-guard.service';


@Injectable()
export class ManageAuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private userAuthGuardService: UserAuthGuardService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return true;
        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(childRoute, state);
    }

    checkLogin(url: string): boolean {
        // 目前仅以该服务下的isLogin状态来判断是否已登录
        if (this.userAuthGuardService.isLogin) { return true; }

        this.userAuthGuardService.redirectURL = url;

        this.router.navigate(['/login']);

        return false;
    }

}
