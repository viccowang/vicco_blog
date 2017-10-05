import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { homeRouter } from './home.router';
import { HomeService } from './home.service';

import { SmallListComponent } from '../small-list/small-list.component';

@NgModule({
    declarations: [
        HomeComponent,
        SmallListComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(homeRouter)
    ],
    providers: [HomeService]
})
export class HomeModule { }