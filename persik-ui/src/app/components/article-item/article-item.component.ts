import { Component, OnInit } from '@angular/core';

enum VoteStatus {
  Active ="active",
  None = ""
}

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {

  public votes: number = 0;
  public isUpVoteActive: VoteStatus = VoteStatus.None;
  public userId: string = "";
  public userUrl: string = `http://localhost:4200/user/${this.userId}`;

  constructor() { }

  ngOnInit(): void {
  }

  public upvote(): void {
    if (this.isUpVoteActive === VoteStatus.None) {
      this.isUpVoteActive = VoteStatus.Active;
      this.votes++;
    }
    else {
      this.isUpVoteActive = VoteStatus.None;
      this.votes--;
    }
  }

  public downvote(): void {
    
  }

}
