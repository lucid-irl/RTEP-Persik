import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthenticationMethodComponent } from './components/authentication-method/authentication-method.component';
import { LargeArticleComponent } from './components/large-article/large-article.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AnonymousBoxComponent } from './components/anonymous-box/anonymous-box.component';
import { AnonymousItemComponent } from './components/anonymous-item/anonymous-item.component';
import { AnonymousArticleComponent } from './components/anonymous-article/anonymous-article.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    AuthenticationMethodComponent,
    LargeArticleComponent,
    NavbarComponent,
    AnonymousBoxComponent,
    AnonymousItemComponent,
    AnonymousArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
