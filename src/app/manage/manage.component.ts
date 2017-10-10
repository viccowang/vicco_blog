import { Component } from '@angular/core';
import { flyIn } from '../animations/fly-in';

@Component({
    selector: 'blog-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
    animations: [ flyIn ]
})
export class BlogManageComponent {

}
