import { Component, Input, OnInit } from '@angular/core';
import { AnonymousArticle } from 'src/app/models/AnonymousArticle';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-anonymous-article',
  templateUrl: './anonymous-article.component.html',
  styleUrls: ['./anonymous-article.component.scss']
})
export class AnonymousArticleComponent implements OnInit {

  @Input() anonymousArticle!: AnonymousArticle;
  constructor() { }

  ngOnInit(): void {
  }
}
