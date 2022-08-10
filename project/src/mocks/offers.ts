import { OfferType } from '../types/offerType';

export const offers: OfferType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'wi-fi', 'kitchen', 'Dishwasher', 'Towels', 'Baby seat', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: false,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg',
    price: 120,
    rating: 2.1,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris.',
    goods: ['Heating', 'Fridge', 'Dishwasher', 'wi-fi', 'Washing machine', 'Baby seat', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: true,
      name: 'Max',
    },
    id: 2,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/room-small.jpg',
    price: 150,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'studio'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Hamburg.',
    goods: ['Heating', 'Washing machine', 'Kitchen', 'Dishwasher', 'Baby seat', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Anna',
    },
    id: 3,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartment-02.jpg',
    price: 250,
    rating: 3.5,
    title: 'Beautiful & luxurious cottage at great location',
    type: 'cottage'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Heating', 'Cabel TV', 'Fridge', 'wi-fi', 'Baby seat', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    id: 4,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-04.jpg',
    price: 130,
    rating: 4.9,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 52.371807,
        longitude: 4.896029,
        zoom: 10
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Heating', 'Fridge', 'wi-fi', 'Cabel TV', 'Baby seat', 'Coffee machine'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    id: 5,
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/apartment-02.jpg',
    ],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-04.jpg',
    price: 180,
    rating: 3.9,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
];
