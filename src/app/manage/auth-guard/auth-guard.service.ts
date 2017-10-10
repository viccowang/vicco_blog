import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UserLoginService } from '../../user/user-login/user-login.service';


@Injectable()
export class ManageAuthGuardService implements CanActivate, CanActivateChild {

    constructor(
        private userLoginService: UserLoginService,
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
        if (this.userLoginService.isLogin) { return true; }

        this.userLoginService.redirectURL = url;

        this.router.navigate(['/login']);

        return false;
    }

}
