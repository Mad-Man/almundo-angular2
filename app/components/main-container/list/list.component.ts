import { Component, Input } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.template.html',
    styleUrls: ['./list.scss']
})
export class List {
    @Input() filters: any;
    @Input() hotels: any;

    /** 
     * Default fontSize value
     */
    fontSize: string = '14px';
}

