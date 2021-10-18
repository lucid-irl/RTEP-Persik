import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VoteStatus } from 'src/app/enums/VoteStatus';
import { AnonymousArticle } from 'src/app/models/AnonymousArticle';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-anonymous-article',
  templateUrl: './anonymous-article.component.html',
  styleUrls: ['./anonymous-article.component.scss']
})
export class AnonymousArticleComponent implements OnInit {

  @Input() anonymousArticle!: AnonymousArticle;

  @Output() showCommentsEvent = new EventEmitter<AnonymousArticle>();

  public isShortContent: boolean = true;
  public shortContent: string = '';
  private LIMIT_CHARS: number = 100;

  public isUpVoteActive:boolean = false;
  public isDownVoteActive:boolean = false;
  public voteStatus: VoteStatus = VoteStatus.None;

  constructor() { }

  ngOnInit(): void {
    this.shortContent = this.truncate(this.anonymousArticle.content, this.LIMIT_CHARS);
  }

  public showComments(): void {
    this.showCommentsEvent.emit(this.anonymousArticle);
  }

  private truncate(content: string, n: number): string {
    return (content.length > n) ? content.substr(0, n - 1) + '&hellip;' : content;
  };

  public showFullContent(): void {
    this.isShortContent = false;
  }

  public showShortContent(): void {
    this.isShortContent = true;
  }

  public upvote():void {
    if (this.voteStatus == VoteStatus.None) {
      this.voteStatus = VoteStatus.Upvote;
      this.isUpVoteActive=true;
      this.isDownVoteActive=false;
      this.anonymousArticle.upvote++;
    }
    else if (this.voteStatus == VoteStatus.Upvote) {
      this.voteStatus = VoteStatus.None
      this.isUpVoteActive = false;
      this.isDownVoteActive = false;
      this.anonymousArticle.upvote--;
    }
    else {
      this.voteStatus = VoteStatus.Upvote;
      this.isUpVoteActive = true;
      this.isDownVoteActive = false;
      this.anonymousArticle.downvote--;
      this.anonymousArticle.upvote++;
    }
  }

  public downvote():void {
    if (this.voteStatus == VoteStatus.None) {
      this.voteStatus = VoteStatus.Downvote;
      this.isDownVoteActive = true;
      this.isUpVoteActive = false;
      this.anonymousArticle.downvote++;
    }
    else if (this.voteStatus == VoteStatus.Downvote) {
      this.voteStatus = VoteStatus.None;
      this.isDownVoteActive=false;
      this.anonymousArticle.downvote--;
    }
    else {
      this.voteStatus = VoteStatus.Downvote;
      this.isUpVoteActive = false;
      this.isDownVoteActive = true;
      this.anonymousArticle.upvote--;
      this.anonymousArticle.downvote++;
    }
  }
}
