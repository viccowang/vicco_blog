import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';


@Component({
    selector: 'blog-home',
    templateUrl: './home.html',
    styleUrls: ['./home.scss'],
    animations: [flyIn]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

}
