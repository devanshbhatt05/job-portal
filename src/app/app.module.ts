import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { JoblistingComponent } from './component/joblisting/joblisting.component';
import { RouterModule, Routes } from '@angular/router';
import { JobshowComponent } from './component/jobshow/jobshow.component';


const appRoute:Routes=[
  {path:'Home', component:LoginComponent},
  {path:'Register', component:RegistrationComponent},
  {path:'JobListing',component:JoblistingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    JoblistingComponent,
    JobshowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
