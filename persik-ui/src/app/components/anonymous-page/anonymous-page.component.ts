import { Component, OnInit } from '@angular/core';
import { Comment } from '../../models/Comment';


@Component({
  selector: 'app-anonymous-page',
  templateUrl: './anonymous-page.component.html',
  styleUrls: ['./anonymous-page.component.scss']
})
export class AnonymousPageComponent implements OnInit {

  public anony_list = [1, 2, 3, 4, 5, 6, 7];

  public comments: Comment[] = [
    {
      id: 1,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet lorem.',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 2,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 3,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 4,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 5,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 6,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
    {
      id: 7,
      publicDate: '15/11/2015',
      content: 'lorem ipsum dolor sit amet',
      upvote: 10,
      downvote: 13,
      parrentId: 0,
      replyAmount: 0
    },
  ];

  public isReplyActive: boolean = false;
  public repliedCommentId: number = 0;
  public articleTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public handleReplyCommentEvent(comment: Comment): void {
    this.isReplyActive = true;
    this.repliedCommentId = comment.id;
  }
}
