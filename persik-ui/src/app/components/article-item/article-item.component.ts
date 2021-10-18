import { Component, Input, OnInit } from '@angular/core';
import { VoteStatus } from 'src/app/enums/VoteStatus';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  @Input() Article!: Article;

  public isShortContent: boolean = true;
  public shortContent: string = '';
  private LIMIT_CHARS: number = 100;

  public isUpVoteActive:boolean = false;
  public isDownVoteActive:boolean = false;
  public voteStatus: VoteStatus = VoteStatus.None;

  constructor() { }

  ngOnInit(): void {
    this.shortContent = this.truncate(this.Article.content, this.LIMIT_CHARS);
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
      this.Article.upvote++;
    }
    else if (this.voteStatus == VoteStatus.Upvote) {
      this.voteStatus = VoteStatus.None
      this.isUpVoteActive = false;
      this.isDownVoteActive = false;
      this.Article.upvote--;
    }
    else {
      this.voteStatus = VoteStatus.Upvote;
      this.isUpVoteActive = true;
      this.isDownVoteActive = false;
      this.Article.downvote--;
      this.Article.upvote++;
    }
  }

  public downvote():void {
    if (this.voteStatus == VoteStatus.None) {
      this.voteStatus = VoteStatus.Downvote;
      this.isDownVoteActive = true;
      this.isUpVoteActive = false;
      this.Article.downvote++;
    }
    else if (this.voteStatus == VoteStatus.Downvote) {
      this.voteStatus = VoteStatus.None;
      this.isDownVoteActive=false;
      this.Article.downvote--;
    }
    else {
      this.voteStatus = VoteStatus.Downvote;
      this.isUpVoteActive = false;
      this.isDownVoteActive = true;
      this.Article.upvote--;
      this.Article.downvote++;
    }
  }
}
