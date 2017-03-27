import _ from 'lodash';

export function HotelList(destination) {
    const destinationsCollection = {
        madrid: {
            coordinates: {
                lat: 40.4214317,
                lon: -3.8831633
            },
            hotels: [{
                    name: 'Hotel Emperador',
                    stars: 3,
                    relevance: 1,
                    pictures: [
                        'http://t-ec.bstatic.com/images/hotel/max1024x768/522/52224244.jpg',
                        'https://media-cdn.tripadvisor.com/media/photo-s/01/ee/bc/62/emperador-hotel-madrid.jpg',
                        'http://www.quierohotel.com/hotel-emperador-madrid-PF935_2.jpg'
                    ],
                    price: 1596,
                    currency: 'ARS',
                    recommended: true,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: false,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    paymentMethods: {
                        payments: true,
                        onsite: true
                    },
                    promo: null,
                    cord: {
                        lat: 40.4214317,
                        lng: -3.8831633
                    }
                },
                {
                    name: 'Petit Palace San Bernardo',
                    stars: 5,
                    relevance: 4,
                    pictures: ['http://q-ec.bstatic.com/images/hotel/max1024x768/827/82733382.jpg'],
                    price: 2000,
                    currency: 'ARS',
                    recommended: true,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: false,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    paymentMethods: {
                        payments: false,
                        onsite: true
                    },
                    promo: null,
                    cord: {
                        lat: 40.4208802,
                        lng: -3.7433781
                    }
                },
                {
                    name: 'Hotel Nuevo Boston',
                    stars: 1,
                    relevance: 5,
                    pictures: ['https://cdn.ostrovok.ru/t/1024x768/mec/hotels/3000000/2470000/2466900/2466861/2466861_113_b.jpg'],
                    price: 700,
                    currency: 'ARS',
                    recommended: false,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: false,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    paymentMethods: {
                        payments: true,
                        onsite: false
                    },
                    promo: {
                        active: true,
                        discountValue: 700 - (700 * 0.25),
                        label: '25% OFF'
                    },
                    cord: {
                        lat: 40.4492457,
                        lng: -3.613156
                    }
                },
                {
                    name: 'Hotel 4',
                    stars: 2,
                    relevance: 10,
                    pictures: ['http://q-ec.bstatic.com/images/hotel/max1024x768/491/49175856.jpg'],
                    price: 861,
                    currency: 'ARS',
                    recommended: false,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: true,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    promo: null,
                    cord: {
                        lat: 40.4292457,
                        lng: -3.693156
                    }
                },
                {
                    name: 'Hotel 5',
                    stars: 3,
                    relevance: 5,
                    pictures: ['http://q-ec.bstatic.com/images/hotel/max1024x768/708/70838874.jpg'],
                    price: 1800,
                    currency: 'ARS',
                    recommended: false,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: true,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    promo: null,
                    cord: {
                        lat: 40.5092457,
                        lng: -3.713156
                    }
                },
                {
                    name: 'Hotel 6',
                    stars: 2,
                    relevance: 6,
                    pictures: ['http://q-ec.bstatic.com/images/hotel/max1024x768/878/87880945.jpg'],
                    price: 950,
                    currency: 'ARS',
                    recommended: false,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: true,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    promo: null,
                    cord: {
                        lat: 40.6892457,
                        lng: -3.713156
                    }
                },
                {
                    name: 'Hotel 7',
                    stars: 2,
                    relevance: 10,
                    pictures: ['http://r-ec.bstatic.com/images/hotel/max1024x768/302/3021044.jpg'],
                    price: 1000,
                    currency: 'ARS',
                    recommended: false,
                    roomOnly: true,
                    perks: [{
                            active: true,
                            key: 'drinks'
                        },
                        {
                            active: true,
                            key: 'breakfast'
                        },
                        {
                            active: true,
                            key: 'roomservice'
                        },
                        {
                            active: true,
                            key: 'cleaning'
                        },
                        {
                            active: true,
                            key: 'wifi'
                        },
                        {
                            active: true,
                            key: 'tv'
                        }
                    ],
                    taxes: {
                        value: true,
                        label: 'Impuestos y tasas no incluidos'
                    },
                    promo: null,
                    cord: {
                        lat: 40.5492457,
                        lng: -3.583156
                    }
                }
            ]
        }
    };

    return _.get(destinationsCollection, destination, []);
}