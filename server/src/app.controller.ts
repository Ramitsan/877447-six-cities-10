import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { OfferType } from '../../project/src/types/offerType';
import { hotels } from './data/hotels';
// console.log(hotels);
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('1')
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
    return [];
  }

  @Post('/comments/:hotelId')
  postComments(@Param('hotelId') hotelId: string) {
    return [];
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
