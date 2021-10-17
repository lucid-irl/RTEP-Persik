import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../models/Comment';

enum VoteStatus {
  Upvote,
  Downvote,
  None,
}

@Component({
  selector: 'app-anonymous-comment',
  templateUrl: './anonymous-comment.component.html',
  styleUrls: ['./anonymous-comment.component.scss']
})
export class AnonymousCommentComponent implements OnInit {

  @Input() comment!: Comment;

  @Output() replyCommentEvent = new EventEmitter<Comment>();

  public isUpVoteActive:boolean = false;
  public isDownVoteActive:boolean = false;
  public voteStatus: VoteStatus = VoteStatus.None;

  constructor() { }

  ngOnInit(): void {
  }

  public replyComment():void {
    this.replyCommentEvent.emit(this.comment);
  }

  public upvote():void {
    if (this.voteStatus == VoteStatus.None) {
      this.voteStatus = VoteStatus.Upvote;
      this.isUpVoteActive=true;
      this.isDownVoteActive=false;
      this.comment.upvote++;
    }
    else if (this.voteStatus == VoteStatus.Upvote) {
      this.voteStatus = VoteStatus.None
      this.isUpVoteActive = false;
      this.isDownVoteActive = false;
      this.comment.upvote--;
    }
    else {
      this.voteStatus = VoteStatus.Upvote;
      this.isUpVoteActive = true;
      this.isDownVoteActive = false;
      this.comment.downvote--;
      this.comment.upvote++;
    }
  }

  public downvote():void {
    if (this.voteStatus == VoteStatus.None) {
      this.voteStatus = VoteStatus.Downvote;
      this.isDownVoteActive = true;
      this.isUpVoteActive = false;
      this.comment.downvote++;
    }
    else if (this.voteStatus == VoteStatus.Downvote) {
      this.voteStatus = VoteStatus.None;
      this.isDownVoteActive=false;
      this.comment.downvote--;
    }
    else {
      this.voteStatus = VoteStatus.Downvote;
      this.isUpVoteActive = false;
      this.isDownVoteActive = true;
      this.comment.upvote--;
      this.comment.downvote++;
    }
  }
}
