import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.390955,
        longitude: 4.853096,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating', 'wi-fi', 'kitchen'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: ['img/apartment-01.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10
    },
    maxAdults: 4,
    previewImage: 'img/apartment-small-03.jpg',
    price: 120,
    rating: 2.1,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.369553,
        longitude: 4.853096,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Paris.',
    goods: ['Heating', 'conditioner', 'wi-fi'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 5,
      isPro: true,
      name: 'Max',
    },
    id: 2,
    images: ['img/apartment-03.jpg', 'img/room.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10
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
        latitude: 52.390955,
        longitude: 4.929309,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Hamburg.',
    goods: ['Heating', 'conditioner', 'elevator'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 4,
      isPro: true,
      name: 'Anna',
    },
    id: 3,
    images: ['img/apartment-02.jpg', 'img/room.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
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
        latitude: 52.380955,
        longitude: 4.939309,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Brussels.',
    goods: ['Heating', 'conditioner', 'wi-fi'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 8,
      isPro: true,
      name: 'Max',
    },
    id: 4,
    images: ['img/apartment-01.jpg', 'img/apartment-03.jpg'],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
    },
    maxAdults: 5,
    previewImage: 'img/apartment-small-04.jpg',
    price: 130,
    rating: 4.9,
    title: 'Beautiful & luxurious house at great location',
    type: 'house'
  },
];
