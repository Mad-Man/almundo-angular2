import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.template.html',
    styleUrls: ['./card.scss']
})
export class Card {
    @Input() hotel: any;
}

