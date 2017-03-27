import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListFilter } from './filters/list.filter';
import { Star } from './star/star.component';


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        Star,
        ListFilter
    ],
    exports: [
        Star,
        ListFilter
    ]
})
export class SharedModule { }
