import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'small-list',
    templateUrl: './small-list.component.html',
    styleUrls: ['./small-list.component.scss']
})

export class SmallListComponent {
    @Input()
    headerName: string;
    @Input()
    contentList: string[];
    @Output()
    clickToDisplayDetail: EventEmitter<any> = new EventEmitter();

    showDetail(postId: string) {
        this.clickToDisplayDetail.emit(postId);
    }

}
