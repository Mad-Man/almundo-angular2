import {
    Component,
    Input,
    OnInit,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'filter-bar',
    templateUrl: './filter-bar.html',
    styleUrls: ['./filter-bar.scss'],
    animations: [
        trigger('filterTrigger', [
            state('close-filter', style({
                overflow: 'hidden',
                'min-height': '20px',
                height: '20px',
                padding: '2px',
            })),
            state('open-filter', style({})),
            transition('close-filter => open-filter', animate('100ms ease-in')),
            transition('open-filter => close-filter', animate('100ms ease-out'))
        ])
    ]
})
export class FilterBar implements OnInit {
    @Input() filters: any;
    @Input() hotels: any;

    /**
     * Configuration for the range Component
     */
    rangeConfig: any = {
        behaviour: 'drag',
        connect: true,
        tooltip: false,
        start: [700, 2000],
        step: 100,
        limit: 2000,
        range: {
            min: 700,
            max: 2000
        }
    };

    /**
     * Search value 
     */
    search: string | null = null;

    /**
     * Range value
     */
    range: any = [700, 2000];

    /**
     * Helper property to hold the animations states
     */
    animationState: any = {
        search: 'open-filter',
        range: 'open-filter',
        stars: 'open-filter'
    }

    /**
     * Stars object to be added to the filters
     */
    stars: any = null;

    /**
     * Initial value of the stars filter options
     */
    options: any = [
        { value: null, checked: true },
        { value: 5, checked: false },
        { value: 4, checked: false },
        { value: 3, checked: false },
        { value: 2, checked: false },
        { value: 1, checked: false }
    ];

    ngOnInit() {
        this._initFilters()
            ._setStarsIniitialState();
    }

    /**
     * Helper method for the panels animations
     */
    toggleAnimationState(filter: string) {
        this.animationState[filter] = this.animationState[filter] === 'open-filter' ? 'close-filter' : 'open-filter';
    }

    /**
     * Method to initialize the filters object
     */
    private _initFilters() {
        this.filters.range = this.range;
        this.filters.stars = this.stars;
        return this;
    }

    /**
     * Method to initialize the stars object
     */
    private _setStarsIniitialState() {
        let selectedOption: any = _.find(this.options, { checked: true });
        if (selectedOption.value) {
            this.filters.stars.push(selectedOption.value);
        } else {
            this.filters.stars = null;
        }
        return this;
    }

    /**
     * Method to filter the hotels by the quantity of stars they have
     * @param number (quantity of stars of hotel)
     */
    filterHotelsByStars(stars: number) {
        return _.filter(this.hotels, { stars: stars }).length;
    }

    /**
     * Method to change the price number of the filter object (represented by where the handles stop)
     */
    changePriceRange(newRange: any) {
        this.range = newRange;
        this.filters.range = newRange;
    }

    /**
     * Method to create the stars items array
     * @param number (quantity of stars)
     */
    createStars(quantity: number) {
        return new Array(quantity);
    }

    /**
     * Method to add the search query to the filters object
     */
    addSearchFilter() {
        this.filters.search = this.search;
    }

    /**
     * Method to change the filters by stars quantity selected
     * @param newStarValue the value of the star filter
     */
    checkboxChanged(newStarValue: any) {
        let optionItem: any = _.find(this.options, { value: parseInt(newStarValue.target.value) });
        let value;
        if (optionItem) {
            optionItem.checked = newStarValue.target.checked;
        } else {
            this.options[0].checked = newStarValue.target.checked;
        }
        if (!isNaN(newStarValue.target.value)) {
            value = parseInt(newStarValue.target.value);
        } else {
            value = newStarValue.target.value;
        }
        if (!value) {
            this.filters.stars = null;
            _.each(this.options, (option) => {
                option.checked = option.value ? false : option.checked
            });
        } else {
            this.options[0].checked = false;
            if (_.isArray(this.filters.stars)) {
                if (this.filters.stars.indexOf(value) < 0) {
                    this.filters.stars.push(value);
                } else {
                    _.pull(this.filters.stars, value);
                }
            } else {
                this.filters.stars = [value];
            }
        }
    }
}
