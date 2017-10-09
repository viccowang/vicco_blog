import { Component, OnInit } from '@angular/core';
import { User } from './user/user.model/user.model';

import { UserLoginService } from './user/user-login/user-login.service';

@Component({
  selector: 'vicco-blog-root',
  templateUrl: './vicco.blog.component.html',
  styleUrls: ['./vicco.blog.component.scss']
})
export class ViccoBlogComponent implements OnInit {
  // initial blog name
  blogName = `泡面不吃泡面`;
  user: User;
  // is login
  get isLogin(): boolean {
    return this.loginService.isLogin;
  }

  constructor(private loginService: UserLoginService) { }

  ngOnInit() {

  }

  logout() {
    this.loginService.logout();
  }

}
