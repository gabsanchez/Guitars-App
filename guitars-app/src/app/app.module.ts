import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuitarComponent } from './guitar/guitar.component';
import { LoginComponent } from './login/login.component';
import { GuitarsStorageService } from './guitars-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    GuitarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GuitarsStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
