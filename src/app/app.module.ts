import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { RegistrationComponent } from './pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListingsComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
