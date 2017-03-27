import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../../../shared/shared.module';
import { Perks } from './perks/perks.component';
import { ImageGallery } from './image-gallery/image-gallery.component';
import { Card } from './card.component';

@NgModule({
    imports: [
        BrowserModule,
        SharedModule
    ],
    declarations: [
        Card,
        ImageGallery,
        Perks
    ],
    exports: [Card]
})
export class CardModule { }
