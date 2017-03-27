import {
    Component,
    OnInit,
    OnDestroy,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { HotelsService } from '../services/hotels.service';
import { Hotel } from '../services/models/hotel';


@Component({
    selector: 'list-container',
    templateUrl: './list-container.template.html',
    styleUrls: ['./list-container.scss'],
    animations: [
        trigger('panelTrigger', [
            state('close-panel', style({
                overflow: 'hidden',
                height: '20px'
            })),
            state('open-panel', style({
                heigth: '100%'
            })),
            transition('close-panel => open-panel', animate('100ms ease-in')),
            transition('open-panel => close-panel', animate('100ms ease-out'))
        ])
    ]
})
export class ListContainer implements OnInit, OnDestroy {
    /**
     * property to sotre the subscribe of the observable
     */
    private _paramSubscriber: any | null = null;
    /**
     * property to sotre the subscribe of the observable
     */
    private _urlSubscriber: any | null = null;

    /**
     * Array of Hotel (model)
     */
    hotels: Hotel[];

    /**
     * Destination id from the url
     */
    destinationId: string | null = null;

    /**
     * property to store the url chunks to create the breadcrumbs
     */
    urlChunks: any = null;

    /**
     * map config properties
     */
    lat: number;
    lng: number;

    /**
     *  filters initial reference 
     */
    filters: any = {
        search: null,
        range: null,
        stars: null
    };

    /**
     * Animation helper property
     */
    animationState: any = {
        status: 'close-panel',
        map: 'close-panel',
        filters: 'close-panel'
    }

    /**
     * Contructor method for the ListContainer class
     * @param hotelService : instance of HotelsService
     * @param route: instance of ActivatedRoute
     */
    constructor(private hotelsService: HotelsService, private route: ActivatedRoute) { }

    /**
     * Method to retrieve the hotels from the hotels service
     * @param destinationId (string) i.e: "madrid"
     */
    getHotels(destinationId: string): void {
        this.hotelsService
            .getList(destinationId)
            .then((destination: any) => {

                this.hotels = destination.hotels
                if (destination.coordinates) {
                    this.lat = parseFloat(destination.coordinates.lat);
                    this.lng = parseFloat(destination.coordinates.lon);
                }
            });
    }

    /**
     * Helper method to toggle the state of the animations
     */
    toggleAnimationState(filter: string) {
        this.animationState[filter] = this.animationState[filter] === 'open-panel' ? 'close-panel' : 'open-panel';
    }

    /**
     * Method to order the hotels object by a given property
     * @param $event {object} (event object from the elemenet from where it was triggered)
     */
    orderHotels($event: any) {
        if ($event.target.value) {
            this.hotels = _.orderBy(this.hotels, [...$event.target.value], ['asc', 'desc']);
        }
    }

    ngOnInit(): void {
        if (this.route) {
            this._urlSubscriber = this.route.url.subscribe(fragment => {
                this.urlChunks = _.reduce(fragment, (chunkA: any, chunkB: any) => [chunkA.path, chunkB.path]);
            });
            this._paramSubscriber = this.route.params.subscribe(params => {
                this.destinationId = params['destination'];
                this.getHotels(this.destinationId);
            });
        }

    }

    ngOnDestroy(): void {
        this._paramSubscriber.unsubscribe();
        this._urlSubscriber.unsubscribe();
    }

}
