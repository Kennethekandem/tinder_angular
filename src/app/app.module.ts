import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { DefaultComponent } from './components/layouts/default/default.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptor} from "./interceptors/token/token.interceptor";
import { HomeComponent } from './components/pages/home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BlankComponent,
    DefaultComponent,
    WelcomeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
