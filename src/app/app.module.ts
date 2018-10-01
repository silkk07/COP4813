import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatFormField, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { LandingComponent } from './landing/landing.component';
import { FormsModule } from '@angular/forms';
import { WebSystems1Component } from './web-systems1/web-systems1.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Assignment4Component } from './assignment4/assignment4.component';
import { Assignment5Component } from './assignment5/assignment5.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WebSystems1Component,
    Assignment3Component,
    Assignment4Component,
    Assignment5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
