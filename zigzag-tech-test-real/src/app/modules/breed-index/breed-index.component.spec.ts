import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedIndexComponent } from './breed-index.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('BreedIndexComponent', () => {
  let component: BreedIndexComponent;
  let fixture: ComponentFixture<BreedIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ BreedIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a breed panel for each breed', () => {
    const breeds = fixture.debugElement.queryAll(By.css('.breed'))
    expect(breeds.length).toBe(11);
  })
});
