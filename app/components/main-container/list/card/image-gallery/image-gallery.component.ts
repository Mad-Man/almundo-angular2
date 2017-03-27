import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'image-gallery',
    templateUrl: './image-gallery.template.html',
    styleUrls: ['./image-gallery.scss']
})
export class ImageGallery implements OnInit {
    @Input() hotel: any;
    imageSource: any = null;
    isGallery: boolean = false;
    private currentIndex: number = 0;


    ngOnInit(): void {
        if (this.hotel.pictures) {
            this.isGallery = this.hotel.pictures.length > 1 ? true : false;
            this.imageSource = this.hotel.pictures[this.currentIndex];
        }
    }
    nextImage() {
        if (this.hotel.pictures.length > 0 && this.currentIndex < this.hotel.pictures.length - 1) {
            this.currentIndex++;
            this.imageSource = this.hotel.pictures[this.currentIndex];
        }
    }
    prevImage() {
        if (this.hotel.pictures.length > 0 && this.currentIndex > 0) {
            this.currentIndex--;
            this.imageSource = this.hotel.pictures[this.currentIndex];
        }
    }
}

