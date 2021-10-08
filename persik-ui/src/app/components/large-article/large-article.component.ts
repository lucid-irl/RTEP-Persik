import { Component, OnInit } from '@angular/core';

enum VoteStatus {
  Active ="active",
  None = ""
}

@Component({
  selector: 'app-large-article',
  templateUrl: './large-article.component.html',
  styleUrls: ['./large-article.component.scss']
})
export class LargeArticleComponent implements OnInit {
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
}
