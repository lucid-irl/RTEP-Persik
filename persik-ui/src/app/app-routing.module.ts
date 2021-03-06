import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import { AuthenticationMethodComponent } from './components/authentication-method/authentication-method.component';
import { LargeArticleComponent } from './components/large-article/large-article.component';
import { PostEditorComponent } from './components/post-editor/post-editor.component';
import { AnonymousPageComponent } from './components/anonymous-page/anonymous-page.component';
import { PollComponent } from './components/poll/poll.component';
import { TagPageComponent } from './components/tag-page/tag-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SuperLargeArticleComponent } from './components/super-large-article/super-large-article.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PollEditorComponent } from './components/poll-editor/poll-editor.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'authentication-method', component: AuthenticationMethodComponent},
  {path: 'change-password', component: ChangePasswordComponent},
  {path: 'write-post', component: PostEditorComponent},
  {path: 'write-poll', component: PollEditorComponent},
  {path: 'anonymous', component: AnonymousPageComponent},
  {path: 'poll', component: PollComponent},
  {path: 'tag', component: TagPageComponent},
  {path: 'search', component: SearchPageComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
