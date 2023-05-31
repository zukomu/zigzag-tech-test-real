import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreedIndexComponent } from './modules/breed-index/breed-index.component';
import { BreedDetailsComponent } from './modules/breed-details/breed-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'home', component: BreedIndexComponent},
  {path: 'breed-details', component: BreedDetailsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
