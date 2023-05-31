import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsComponent } from './breed-details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('BreedDetailsComponent', () => {
  let component: BreedDetailsComponent;
  let fixture: ComponentFixture<BreedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ BreedDetailsComponent ],
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(BreedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
