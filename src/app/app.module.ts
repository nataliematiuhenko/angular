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

@NgModule({
  declarations: [
    AppComponent,
    WelcommeComponent,
    HeaderComponent,
    ShortenerComponent,
    ShortenerDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
