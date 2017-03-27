import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../shared/shared.module';
import { CardModule } from './card/card.module';
import { Card } from './card/card.component';
import { List } from './list.component';

@NgModule({
    imports: [
        CardModule,
        SharedModule,
        BrowserModule
    ],
    declarations: [List],
    exports: [List]
})
export class ListModule { }
