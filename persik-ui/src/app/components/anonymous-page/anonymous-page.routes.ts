import { Routes } from "@angular/router";
import { AnonymousCommentComponent } from "../anonymous-comment/anonymous-comment.component";
import { LargeArticleComponent } from "../large-article/large-article.component";
import { AnonymousPageComponent } from "./anonymous-page.component";

export const aboutRoutes: Routes = [
  {
      path: 'anonymous',
      component: AnonymousPageComponent,
      children: [
          {
              path: '',
              outlet: 'aboutOne',
              component: LargeArticleComponent,
              pathMatch: 'full'
          },
          {
              path: '/hot',
              outlet: 'anonymous-container',
              component: AnonymousCommentComponent,
              pathMatch: 'full'
          }
      ]
  }
];