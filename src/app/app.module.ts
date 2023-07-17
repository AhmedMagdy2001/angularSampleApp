import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent, 
    LoginPageComponent, NewsComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
