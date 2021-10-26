import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnonymousArticle } from 'src/app/models/AnonymousArticle';
import { PollArticle } from 'src/app/models/PollArticle';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public anony_list = [1, 2,3,4,5,6];
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
  public pollArticles: PollArticle[] = [
    {
      id: 0,
      title: 'Win 10 tốt hơn hay win 11 tốt hơn',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    },
    {
      id: 1,
      title: 'Lần đầu về nhà bạn trai có cần rửa bát không',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    },
    {
      id: 2,
      title: 'Có cần sao kê không?',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    },
    {
      id: 3,
      title: 'Win 10 tốt hơn hay win 11 tốt hơn',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    },
    {
      id: 4,
      title: 'Yasuo number one',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    },
  ]


  
  constructor() { }
  isActiveAnonymous: boolean = false;
  isActive: boolean = false;
  isActivePoll : boolean = false;
  isActiveUser : boolean = false;
  public ngOnInit(): void {
  }
  public onClick(): void {
    this.isActive = true;
    this.isActivePoll= false;
    this.isActiveUser=false;
    this.isActiveAnonymous = false;
    }
  public onClickPoll() : void{
    this.isActivePoll = true;
    this.isActive= false;
    this.isActiveUser=false;
    this.isActiveAnonymous = false;
  }
  public onClickUser(): void{
    this.isActiveUser = true;
    this.isActivePoll= false;
    this.isActive=false;
    this.isActiveAnonymous = false;
  }
  public onClickAnonymous(): void{
    this.isActiveAnonymous = true ;
    this.isActiveUser = false;
    this.isActivePoll= false;
    this.isActive=false;
  }
}
