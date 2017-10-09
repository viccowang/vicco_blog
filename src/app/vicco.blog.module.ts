import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogRoutes } from './vicco.blog.routers';

import { ViccoBlogComponent } from './vicco.blog.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BlogCommitComponent } from './commit/commit.component';
import { AboutmeComponent } from './about-me/about-me.component';
import { UserLoginComponent } from './user/user-login/user-login.component';

import { UserLoginService } from './user/user-login/user-login.service';

@NgModule({
  declarations: [
    ViccoBlogComponent,
    WorkExperienceComponent,
    BlogCommitComponent,
    AboutmeComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(BlogRoutes)
  ],
  providers: [UserLoginService],
  bootstrap: [ViccoBlogComponent]
})
export class AppModule { }
