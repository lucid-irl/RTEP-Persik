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
import { AnonymousArticleComponent } from './components/anonymous-article/anonymous-article.component';
import { AnonymousPageComponent } from './components/anonymous-page/anonymous-page.component';
import { AnonymousCommentComponent } from './components/anonymous-comment/anonymous-comment.component';
import { PollComponent } from './components/poll/poll.component';
import { PollVoteComponent } from './components/poll-vote/poll-vote.component';
import { PollArticleComponent } from './components/poll-article/poll-article.component';
import { AnonymousNavigationBarComponent } from './components/anonymous-navigation-bar/anonymous-navigation-bar.component';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PollEditorComponent } from './components/poll-editor/poll-editor.component';
import { PollEditorItemComponent } from './components/poll-editor-item/poll-editor-item.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleHorizontalComponent } from './components/article-horizontal/article-horizontal.component';
import { NgxUiLoaderModule, NgxUiLoaderRouterModule, NgxUiLoaderConfig } from "ngx-ui-loader";
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: "#ff009e",
  bgsOpacity: 0.5,
  bgsPosition: "bottom-right",
  bgsSize: 60,
  bgsType: "ball-spin-clockwise",
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: "#ff009e",
  fgsPosition: "center-center",
  fgsSize: 60,
  fgsType: "ball-spin-clockwise",
  gap: 24,
  logoPosition: "center-center",
  logoSize: 80,
  logoUrl: "assets/images/peach.png",
  masterLoaderId: "master",
  overlayBorderRadius: "0",
  overlayColor: "rgba(40, 40, 40, 0.8)",
  pbColor: "#ff009e",
  pbDirection: "ltr",
  pbThickness: 3,
  hasProgressBar: true,
  text: "Persik",
  textColor: "#FFFFFF",
  textPosition: "center-center",
  maxTime: -1,
  minTime: 300
}

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
    SearchPageComponent,
    SearchUserComponent,
    ChangePasswordComponent,
    PollEditorComponent,
    PollEditorItemComponent,
    HomeComponent,
    ArticleHorizontalComponent,
    ArticleDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
