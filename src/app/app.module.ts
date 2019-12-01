import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcommeComponent } from './welcomme/welcomme.component';
import { HeaderComponent } from './header/header.component';
import { ShortenerComponent } from './shortener/shortener.component';
import { ShortenerDetailsComponent } from './shortener/shortener-details/shortener-details.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcommeComponent,
    HeaderComponent,
    ShortenerComponent,
    ShortenerDetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
