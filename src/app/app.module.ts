import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegistrationComponent } from './registration/registration.component';


import { FormsModule, } from '@angular/forms';
import { LandComponent } from './land/land.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddParcelComponent } from './add-parcel/add-parcel.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewParcelComponent } from './view-parcel/view-parcel.component';


  // Rest of your component code



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    RegistrationComponent,
    
    LandComponent,
    AddParcelComponent,
    FooterComponent,
    NavComponent,
    AdminDashboardComponent,
    HomeComponent,
    ViewParcelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule,FormsModule,HttpClientModule,
    
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
