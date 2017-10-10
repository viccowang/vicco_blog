import { Component, OnInit } from '@angular/core';
import { Router, RouterState, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { UserLoginService } from './user-login.service';
import { UserAuthGuardService } from '../auth-guard/auth-guard.service';
import { User } from '../user.model/user.model';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user = new User();

  constructor(
      private router: Router,
      private loginService: UserLoginService,
      private userAuthGuardService: UserAuthGuardService,
    ) { }

  ngOnInit() {

  }

  login() {
    this.loginService.login(this.user).subscribe( res => {
      if ( this.userAuthGuardService.isLogin ) {
        this.router.navigate(['/home']);
      }
    });
  }

}
