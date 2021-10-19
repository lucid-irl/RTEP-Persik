import { Component, OnInit } from '@angular/core';
import { AnonymousArticle } from 'src/app/models/AnonymousArticle';
import { Article } from 'src/app/models/Article';
import { Comment } from '../../models/Comment';


@Component({
  selector: 'app-anonymous-page',
  templateUrl: './anonymous-page.component.html',
  styleUrls: ['./anonymous-page.component.scss']
})
export class AnonymousPageComponent implements OnInit {

  public anonymousArticles: AnonymousArticle[] = [
    {
      id: 0,
      title: 'Người trong kẹt',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      tag: "tâm sự",
      commentAmount: 10
    },
    {
      id: 1,
      title: 'Không hiểu người trong cuộc',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      tag: "tâm sự",
      commentAmount: 10
    },
    {
      id: 2,
      title: 'Nghệ sĩ sao kê',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      tag: "tâm sự",
      commentAmount: 10
    },
    {
      id: 3,
      title: 'Ông hoàng ăn chặn',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      tag: "tâm sự",
      commentAmount: 10
    },
  ]

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

  public showCommentsHandler(anonymousArticle: AnonymousArticle): void {
    this.articleTitle = anonymousArticle.title;
  }

  public cancelReply(): void {
    this.isReplyActive = false;`b n=--ds$JFdcx`
    this.repliedCommentId = 0;
  }
}
