import { Component, OnInit } from '@angular/core';
import { DogBreedsService } from '../../services/dog-breeds.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-index',
  templateUrl: './breed-index.component.html',
  styleUrls: ['./breed-index.component.scss']
})
export class BreedIndexComponent implements OnInit {

  constructor( public breedService: DogBreedsService, private router: Router) { }

  ngOnInit(): void {
    this.breedService.dogBreeds$.subscribe(breeds => {
      this.pages = Array(Math.ceil(breeds.length /5)).fill(0).map((a, i) => i);
    })
  }
  pageNumber: number = 0
  maxPerPage: number = 5
  pages: number[]
  openDog(breedId: number){
    this.router.navigate(["/breed-details"], { queryParams: {id: breedId}})
  }
}
