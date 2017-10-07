import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { HomeService } from './home.service';


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRouter)
    ],
    providers: []
})
export class HomeModule { }
