import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { IDogBreed } from './model/IDogBreed';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getBreeds(): IDogBreed[] {
    try{
      return this.appService.getBreeds();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
