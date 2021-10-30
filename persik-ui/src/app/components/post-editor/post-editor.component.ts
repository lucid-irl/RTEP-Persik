import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleState } from 'src/app/enums/ArticleState';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  @ViewChild('editor') editor: any;
  public currentArticleState:ArticleState = ArticleState.Public;

  constructor() { }

  ngOnInit(): void {
  }

  public changeArticleState():void {
    if(this.currentArticleState == ArticleState.Public){
      this.currentArticleState = ArticleState.Anonymous;
    }
    else {
      this.currentArticleState = ArticleState.Public;
    }
  }

}
