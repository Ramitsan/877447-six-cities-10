import { CommentType } from '../types/commentType';

export const comments: CommentType[] = [
  {
    idOffer: 1,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Aug 01 2022 21:08:45 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 2.5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina'
    }
  },
  {
    idOffer: 1,
    comment: 'The building is green and from 18th century.',
    date: 'Mon Aug 30 2020 15:10:45 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 2.5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina'
    }
  },
  {
    idOffer: 1,
    comment: 'The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'Mon Aug 25 2021 18:12:45 GMT+0300 (Москва, стандартное время)',
    id: 3,
    rating: 1.3,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Max'
    }
  },
  {
    idOffer: 2,
    comment: 'The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Aug 25 2021 18:12:45 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4.6,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Angelina'
    }
  },
  {
    idOffer: 3,
    comment: 'The building is green and from 18th century. The building is green and from 18th century. The building is green and from 18th century.',
    date: 'Mon Aug 18 2022 10:20:45 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 3.8,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max'
    }
  },
];
