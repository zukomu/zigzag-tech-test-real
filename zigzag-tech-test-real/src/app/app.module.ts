import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BreedReducer } from './store/reducers/breed.reducer';
import { StoreModule } from '@ngrx/store';
import { BreedIndexComponent } from './modules/breed-index/breed-index.component';
import { BreedDetailsComponent } from './modules/breed-details/breed-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BreedIndexComponent,
    BreedDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      breeds: BreedReducer
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
