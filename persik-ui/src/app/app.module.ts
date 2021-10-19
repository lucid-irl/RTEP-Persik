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
import { SuperLargeArticleComponent } from './components/super-large-article/super-large-article.component';
import { NotificationItemComponent } from './components/notification-item/notification-item.component';
import { AnonymousBoxComponent } from './components/anonymous-box/anonymous-box.component';
import { AnonymousItemComponent } from './components/anonymous-item/anonymous-item.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { QuillModule } from 'ngx-quill';
import { AnonymousArticleComponent } from './components/anonymous-article/anonymous-article.component';
import { AnonymousPageComponent } from './components/anonymous-page/anonymous-page.component';
import { AnonymousCommentComponent } from './components/anonymous-comment/anonymous-comment.component';
import { PollComponent } from './components/poll/poll.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';
import { PollArticleComponent } from './components/poll-article/poll-article.component';
import { AnonymousNavigationBarComponent } from './components/anonymous-navigation-bar/anonymous-navigation-bar.component';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ChangePasswordComponent } from './change-password/change-password.component';




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
    NotificationItemComponent,
    AnonymousBoxComponent,
    AnonymousItemComponent,
    PostEditorComponent,
    AnonymousArticleComponent,
    AnonymousPageComponent,
    AnonymousCommentComponent,
    PollComponent,
    PollVoteComponent,
    PollArticleComponent,
    AnonymousNavigationBarComponent,
    TagPageComponent,
    ArticleItemComponent,
    ChangePasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
