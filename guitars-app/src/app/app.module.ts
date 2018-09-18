import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GuitarsStorageService } from './guitars-storage.service';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GuitarsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
