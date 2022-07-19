import { Offer } from '../types/offer';

export const offersList: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'wi-fi', 'kitchen'],
    host: {
      avatarUrl: '../../public/img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['../../public/img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: '../../public/img/apartment-small-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 35.370216,
        longitude: 5.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris.',
    goods: ['Heating', 'conditioner', 'wi-fi'],
    host: {
      avatarUrl: '../../public/img/avatar-max.jpg',
      id: 5,
      isPro: true,
      name: 'Max',
    },
    id: 2,
    images: ['../../public/img/apartment-03.jpg', '../../public/img/room.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 35.35514938496378,
      longitude: 5.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: '../../public/img/room-small.jpg',
    price: 150,
    rating: 4.9,
    title: 'Beautiful & luxurious studio at great location',
    type: 'studio'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 58.370216,
        longitude: 8.895168,
        zoom: 10,
      },
      name: 'Hamburg',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Hamburg.',
    goods: ['Heating', 'conditioner', 'elevator'],
    host: {
      avatarUrl: '../../public/img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Anna',
    },
    id: 3,
    images: ['../../public/img/apartment-02.jpg', '../../public/img/room.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 58.35514938496378,
      longitude: 8.673877537499948,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: '../../public/img/room-small.jpg',
    price: 250,
    rating: 3.5,
    title: 'Beautiful & luxurious cottage at great location',
    type: 'cottage'
  },
  {
    bedrooms: 5,
    city: {
      location: {
        latitude: 65.370216,
        longitude: 3.895168,
        zoom: 10,
      },
      name: 'Brussels',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Heating', 'conditioner', 'wi-fi'],
    host: {
      avatarUrl: '../../public/img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    id: 3,
    images: ['../../public/img/apartment-01.jpg', '../../public/img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 65.35514938496378,
      longitude: 3.673877537499948,
      zoom: 8
    },
    maxAdults: 5,
    previewImage: '../../public/img/apartment-small-04.jpg',
    price: 130,
    rating: 4.5,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
];
