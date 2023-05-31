import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map } from 'rxjs';
import { IDogBreed } from '../store/models/IDogBreed';

@Injectable({
  providedIn: 'root'
})
export class DogBreedsService  {
  host = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.populateDogBreeds()
   }
  dogBreeds$: Observable<IDogBreed[]>
  populateDogBreeds(){
    this.dogBreeds$ = this.getBreeds()
  }
  getBreeds(): Observable<IDogBreed[]> {
    return this.http.get<IDogBreed[]>(`${this.host}`).pipe(map((res) => (res)));
  }
}
