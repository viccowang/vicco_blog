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
    listClickToDisplay: EventEmitter<any> = new EventEmitter();

    listClick(postId: string) {
        this.listClickToDisplay.emit(postId);
    }

}
