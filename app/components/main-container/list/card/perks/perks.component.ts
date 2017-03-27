import { Component, Input } from '@angular/core';

@Component({
    selector: 'perks',
    templateUrl: './perks.template.html',
    styleUrls: ['./perks.scss']
})
export class Perks {
    @Input() perks: any;
}
