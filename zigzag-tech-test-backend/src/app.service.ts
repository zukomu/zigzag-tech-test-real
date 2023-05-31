import { Injectable } from '@nestjs/common';
import { IDogBreed } from './model/IDogBreed';
import * as fs from 'fs'


@Injectable()
export class AppService {
  private breeds: Array<IDogBreed>;
  constructor(){
    this.breeds = JSON.parse(fs.readFileSync('Dog_Data.json', 'utf8'));
  }
  getBreeds(): IDogBreed[] {
    return this.breeds;
  }
}
