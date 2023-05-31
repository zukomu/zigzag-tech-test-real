import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IDogBreed } from '../../store/models/IDogBreed';
import { DogBreedsService } from '../../services/dog-breeds.service';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent implements OnInit {

  constructor(
    private breedService: DogBreedsService,
    private route: ActivatedRoute, private router: Router) { }
  dogBreed: IDogBreed;
  ngOnInit(): void {
    this.getDogBreed()
  }

  getDogBreed(): void{
    this.breedService.dogBreeds$.subscribe(breeds => {
      this.dogBreed = breeds.find(a => a.id == this.route.snapshot.queryParams["id"])
    })
  }

  returnToIndex(){
    this.router.navigate(["/home"])
  }

}
