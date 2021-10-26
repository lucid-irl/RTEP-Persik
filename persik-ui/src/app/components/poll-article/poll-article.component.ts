import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PollArticle } from 'src/app/models/PollArticle';

@Component({
  selector: 'app-poll-article',
  templateUrl: './poll-article.component.html',
  styleUrls: ['./poll-article.component.scss']
})
export class PollArticleComponent implements OnInit {

  @Input() pollArticle!: PollArticle;

  constructor() { }

  ngOnInit(): void {
  }

}
