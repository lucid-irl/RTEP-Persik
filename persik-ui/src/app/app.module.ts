import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticationMethodComponent } from './authentication-method/authentication-method.component';
import { LargeArticleComponent } from './components/large-article/large-article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SuperLargeArticleComponent } from './components/super-large-article/super-large-article.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthenticationMethodComponent,
    LargeArticleComponent,
    NavbarComponent,
    SuperLargeArticleComponent,
    NotificationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
