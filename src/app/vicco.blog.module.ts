import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogRoutes } from './vicco.blog.routers';

import { ViccoBlogComponent } from './vicco.blog.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { BlogCommitComponent } from './commit/commit.component';
import { AboutmeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    ViccoBlogComponent,
    WorkExperienceComponent,
    BlogCommitComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(BlogRoutes)
  ],
  providers: [],
  bootstrap: [ViccoBlogComponent]
})
export class AppModule { }
