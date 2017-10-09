import { Component, OnInit } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserLoginService } from './user-login.service';
import { User } from '../user.model/user.model';

import '../../../mock-data/post.data';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user = new User();

  constructor(
      private router: Router,
      private loginService: UserLoginService
    ) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.user).subscribe( res => {
      // const state: RouterState = this.router.routerState;
      // const snapshot: RouterStateSnapshot = state.snapshot;
      // const root: ActivatedRouteSnapshot = snapshot.root;
      // console.log( root.firstChild );
      if ( this.loginService.isLogin ) {
        this.router.navigate(['/home']);
      }
    });
  }

}
