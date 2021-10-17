import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-article',
  templateUrl: './poll-article.component.html',
  styleUrls: ['./poll-article.component.scss']
})
export class PollArticleComponent implements OnInit {
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isActive = true;
  }
}
