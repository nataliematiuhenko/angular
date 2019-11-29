import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcommeComponent } from './welcomme/welcomme.component';
import { ShortenerComponent } from './shortener/shortener.component';
import { ShortenerDetailsComponent } from './shortener/shortener-details/shortener-details.component';


const routes: Routes = [
  { path: '', component: WelcommeComponent },
  { path: 'shortener', component: ShortenerComponent },
  { path: 'shortener/:id', component: ShortenerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
