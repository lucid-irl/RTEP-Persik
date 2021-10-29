import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PollArticle } from 'src/app/models/PollArticle';
import { PollService } from 'src/app/services/poll.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poll-article',
  templateUrl: './poll-article.component.html',
  styleUrls: ['./poll-article.component.scss']
})
export class PollArticleComponent implements OnInit {

  @Input() pollArticle!: PollArticle;

  constructor(public pollService:PollService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pollService.fetchPolls().then((res)=>{
      console.log(res);
      this.pollService.pollsData = res;
    }).catch((err)=>{
      console.log(err);
    });
    this.pollIndex = this.route.snapshot.paramMap.get('pollindex');
  }

  pollIndex:any;

}
