import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'stars',
    templateUrl: './star.template.html',
    styleUrls: ['./star.scss']
})
export class Star implements OnInit {
    @Input() quantity: number;
    @Input() fontSize: string;

    createStars(quantity: number) {
        return new Array(quantity);
    }

    ngOnInit(): void {
        if (!this.fontSize) {
            this.fontSize = '12px';
        }
    }
}