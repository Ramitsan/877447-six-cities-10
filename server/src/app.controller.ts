import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { OfferType } from '../../project/src/types/offerType';
import { hotels } from './data/hotels';
import { comments } from './data/comments';
import fetch from 'node-fetch';
import * as fs from 'fs/promises';
import * as path from 'path';

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
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  getHotels(): Array<OfferType> {
    return hotels;
  }

  @Get('/hotels/:hotelId')
  getHotelById(@Param('hotelId') hotelId: string): OfferType {
    return hotels.find(hotel => hotel.id == Number(hotelId));
  }

  @Get('/hotels/:hotelId/nearby')
  getHotelsNearby(@Param('hotelId') hotelId: string) {
    return [];
  }

  @Get('/favorite')
  getHotelsFavotite() {
    return [];
  }

  @Post('/favorite/:hotelId/:status')
  postFavoriteStatus(@Param('hotelId') hotelId: string, @Param('status') status: string) {
    return {};
  }

  @Get('/comments/:hotelId')
  getComments(@Param('hotelId') hotelId: string) {
    const hotelComments = comments.find(comment => comment.hotelId.toString() === hotelId).comments;
    console.log(hotelComments, hotelId);
    return hotelComments;
  }

  @Post('/comments/:hotelId')
  postComments(@Param('hotelId') hotelId: string, @Body() body: {
    rating: number,
    comment: string
  }) {
    console.log(body);
    const hotelComments = comments.find(comment => comment.hotelId.toString() === hotelId).comments;
    const comment: IComment = {
      id: hotelComments.length + 1,
      user: {
        "id": 16,
        "isPro": true,
        "name": "Mollie",
        "avatarUrl": "https://10.react.pages.academy/static/avatar/7.jpg"
    },
      rating: body.rating,
      comment: body.comment,
      date: new Date().toISOString()
    }
    hotelComments.push(comment);
    
    return hotelComments;
  }

  @Get('/login')
  getLogin() {
    return {};
  }

  @Post('/login')
  postLogin(@Body() body: {
    email: string
    password: string
    }) {
    return {};
  }

  @Delete('/logout')
  deleteLogout() {
    return {};
  } 
}
