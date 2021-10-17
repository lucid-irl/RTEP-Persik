import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../models/Comment';

@Component({
  selector: 'app-anonymous-comment',
  templateUrl: './anonymous-comment.component.html',
  styleUrls: ['./anonymous-comment.component.scss']
})
export class AnonymousCommentComponent implements OnInit {

  @Input() comment!: Comment;

  @Output() replyCommentEvent = new EventEmitter<Comment>();

  constructor() { }

  ngOnInit(): void {
  }

  public replyComment():void {
    this.replyCommentEvent.emit(this.comment);
  }
  
}
