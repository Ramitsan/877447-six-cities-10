import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hotels')
  getHotels() {
    return [];
  }

  @Get('/hotels/:hotelId')
  getHotelById(@Param('hotelId') hotelId: string) {
    return {};
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
