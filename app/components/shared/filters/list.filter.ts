import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
    name: 'listFilter',
    pure: false
})
@Injectable()
export class ListFilter implements PipeTransform {
    transform(items: any[], args: any): any {
        if (items && args) {
            return items.filter(item => {
                let filters: any = {
                    price: null,
                    name: null,
                    stars: null
                };
                if (!args.search) {
                    filters.name = item.name;
                } else{
                    filters.name = args.search;
                }
                if (args.stars && args.stars.length > 0) {
                    let matchStar = item.stars.toString().match(args.stars.join('|'));
                    if (matchStar) {
                        filters.stars = parseInt(matchStar.input);
                    }
                } else {
                    filters.stars = item.stars;
                }
                filters.price = args.range ? args.range : [item.price, item.price];
                let pattern = new RegExp(filters.name, 'g');
                return pattern.test(item.name) &&
                    item.stars === filters.stars &&
                    (item.price <= filters.price[1] && item.price >= filters.price[0]);
            })
        }
    }
}
