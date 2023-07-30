import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { OfferType } from '../../project/src/types/offerType';
import { hotels } from './data/hotels';
import { comments } from './data/comments';

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
  getHello(): string {
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
