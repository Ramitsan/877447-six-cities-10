import { Body, Controller, Get, Param, Post, Delete, UseGuards, Request, HttpStatus, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { OfferType } from '../../project/src/types/offerType';
import { hotels } from './data/hotels';
import { comments } from './data/comments';
import fetch from 'node-fetch';
import * as fs from 'fs/promises';
import * as path from 'path';
import { users } from './data/users';
import { UserDataType } from '../../project/src/types/user-data';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { UserGuard } from './auth/user.guard';

interface IUser  {
  "id": number,
  "isPro": boolean,
  "name": string,
  "avatarUrl": string
};

interface IComment  {
  "id": number,
  "user": IUser,
  "rating": number,
  "comment": string,
  "date": string
}

const favorites: Record<string, number[]> = {};
const OFFER_FAVORITE_STATUS_TRUE = 1;
const OFFER_FAVORITE_STATUS_FALSE = 0;
const HOST = 'http://localhost:3000';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @Get()
  async getHello() {
    // await fs.mkdir(path.join(__dirname, 'data/static/hotel'), {
    //   recursive: true,
    // });

    // const images = new Array(19).fill(0).map((_, index) => {
    //   fetch(`https://10.react.pages.academy/static/hotel/${index + 1}.jpg`).then(res => res.blob()).then((blob: Blob) => blob.arrayBuffer())
    //   .then((img: ArrayBuffer) => {
    //     console.log(img);

    //     fs.writeFile(path.join(__dirname, 'data/static/hotel', `${index + 1}.jpg`), Buffer.from(img));
    //   });
    // })
    //  return this.appService.getHello();

  //   const users = [];
  //   comments.forEach(comment => {
  //     comment.comments.forEach(it => {
  //       if(users.find(user => user.id == it.user.id) == null) {
  //         users.push(it.user);
  //       }
  //     })
  //   })
  //  return users;

  await fs.mkdir(path.join(__dirname, 'data/static/avatar'), {
    recursive: true,
  });

  const images = new Array(9).fill(0).map((_, index) => {
    fetch(`https://10.react.pages.academy/static/avatar/${index + 1}.jpg`).then(res => res.blob()).then((blob: Blob) => blob.arrayBuffer())
    .then((img: ArrayBuffer) => {
      console.log(img);

      fs.writeFile(path.join(__dirname, 'data/static/avatar', `${index + 1}.jpg`), Buffer.from(img));
    });
  })
   return this.appService.getHello();
  }

  @Get('hotels')
  @UseGuards(UserGuard)
  getHotels(@Request() req): Array<OfferType> {
    const user: IUser = req.user;
    return hotels.map(hotel => {
      return {
        ...hotel, 
        previewImage: HOST + hotel.previewImage,
        images: hotel.images.map(image => HOST + image),
        isFavorite: user ? (favorites[user.id.toString()] || []).includes(hotel.id) : false 
      }
    });
  }

  @Get('/hotels/:hotelId')
  @UseGuards(UserGuard)
  getHotelById(@Request() req, @Param('hotelId') hotelId: string): OfferType {
    const user: IUser = req.user;
    const hotel = hotels.find(hotel => hotel.id == Number(hotelId));
    return {
      ...hotel, 
      previewImage: HOST + hotel.previewImage,
      images: hotel.images.map(image => HOST + image),
      isFavorite: user ? (favorites[user.id.toString()] || []).includes(hotel.id) : false 
    }
  }

  @Get('/hotels/:hotelId/nearby')
  @UseGuards(UserGuard)
  getHotelsNearby(@Request() req, @Param('hotelId') hotelId: string) {
    const user: IUser = req.user;
    const currentHotel = hotels.find(hotel => hotel.id == Number(hotelId));
    const sorted = [...hotels].sort((a, b) => Math.hypot(currentHotel.location.latitude - a.location.latitude, currentHotel.location.longitude - a.location.longitude) - Math.hypot(currentHotel.location.latitude - b.location.latitude, currentHotel.location.longitude - b.location.longitude));
    return sorted.slice(1, 4).map(hotel => {
      return {
        ...hotel, 
        previewImage: HOST + hotel.previewImage,
        images: hotel.images.map(image => HOST + image),
        isFavorite: user ? (favorites[user.id.toString()] || []).includes(hotel.id) : false  
      }
    });
  }

  @Get('/favorite')
  @UseGuards(AuthGuard)
  getHotelsFavotite(@Request() req) {
    const user: IUser = req.user;
    const userFavorites = favorites[user.id.toString()] || [];
    const favoritesIds = userFavorites.filter(hotelId => hotels.find(hotel => hotel.id == Number(hotelId)));
    const hotelsMap: Record<number, OfferType> = {};
    hotels.forEach((hotel) => {
      hotelsMap[hotel.id] = hotel;
    });
    return favoritesIds.map((hotelId: number) => {
      const hotel = hotelsMap[hotelId];
      return {
        ...hotel, 
        previewImage: HOST + hotel.previewImage,
        images: hotel.images.map(image => HOST + image),
        isFavorite: true
      }
    });
  }

  @Post('/favorite/:hotelId/:status')
  @UseGuards(AuthGuard)
  postFavoriteStatus(@Request() req, @Param('hotelId') hotelId: string, @Param('status') status: string) {
    const user: IUser = req.user;
    let userFavorites = favorites[user.id.toString()];
    if(!userFavorites) {
      favorites[user.id.toString()] = [];
      userFavorites = favorites[user.id.toString()];
    }
    if(Number(status) === OFFER_FAVORITE_STATUS_TRUE) {
      userFavorites.push(Number(hotelId));
    } 
    if(Number(status) === OFFER_FAVORITE_STATUS_FALSE) {
      const index = userFavorites.findIndex(it => it == Number(hotelId));
      if (index != -1) {
        userFavorites.splice(index, 1);
      }      
    }   
    const hotel = hotels.find(hotel => hotel.id == Number(hotelId));
    return {
      ...hotel, 
      previewImage: HOST + hotel.previewImage,
      images: hotel.images.map(image => HOST + image),
      isFavorite: Number(status) === OFFER_FAVORITE_STATUS_TRUE ? true : false
     }
  }

  @Get('/comments/:hotelId')
  getComments(@Param('hotelId') hotelId: string) {
    const hotelComments = comments.find(comment => comment.hotelId.toString() === hotelId).comments;
    console.log(hotelComments, hotelId);
    return hotelComments.map(comment => {
      const foundUser =  users.find(user => comment.user.id === user.id);
      return {
        ...comment, 
        user: {
          ...foundUser,
          avatarUrl: HOST + foundUser.avatarUrl,
        }
      }
    });
  }

  @Post('/comments/:hotelId')
  @UseGuards(AuthGuard)
  postComments(@Request() req, @Param('hotelId') hotelId: string, @Body() body: {
    rating: number,
    comment: string
  }) {
    const user: IUser = req.user;
    const hotelComments = comments.find(comment => comment.hotelId.toString() === hotelId).comments;
    const comment: IComment = {
      id: hotelComments.length + 1,
      user: {
        id: user.id,
        isPro: user.isPro,
        name: user.name,
        avatarUrl: user.avatarUrl
    },
      rating: body.rating,
      comment: body.comment,
      date: new Date().toISOString()
    }
    hotelComments.push(comment);
    
    return hotelComments;
  }

  @Get('/login')
  @UseGuards(AuthGuard)
  getLogin(@Request() req) {
    const user: IUser = req.user;
    return {...user, password: undefined};
  }

  @Post('/login')
  @HttpCode(200)
  async postLogin(@Body() body: {
    email: string
    password: string
    }) {
      // const foundUser = users.find(it => it.email === body.email);
      // if(foundUser && foundUser.password == body.password) {
        // const result: UserDataType = {
        //   id: 25 /*'foundUser.id',*/,
        //   email: 'foundUser.email',
        //   token: '12345'
        // } 
        // return result;
      return this.authService.signIn(body.email, body.password)
    //   }
    // return {};
  }

  @Delete('/logout')
  @HttpCode(204)
  deleteLogout() {
    return {};
  } 
}
