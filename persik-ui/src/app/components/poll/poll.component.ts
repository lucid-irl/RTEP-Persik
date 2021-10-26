import { Component, Input, OnInit } from '@angular/core';
import { PollArticle } from 'src/app/models/PollArticle';
import { PollOption } from 'src/app/models/PollOption';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  public idPollArticle: number =0;
  public isPollArticle: boolean = false;
  public pollArticle: PollArticle[] = [
    {
      id: 0,
      title: 'Win 10 tốt hơn hay win 11 tốt hơn',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      publicDate: '10/10/2021',
      modifyDate: '10/10/2021',
      username: 'Thanh Minh',
    }
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

  ngOnInit(): void {
  }
  public votePollArticle(pollArticles: PollArticle, pollArticle: PollArticle): void{
    pollArticle.title = pollArticles.title;
  }

  public OnclickShowVote(){
    if(this.isPollArticle == false){
      this.isPollArticle = true;
    }
  }
  public OnClickShowPoll(pollArticles: PollArticle, pollArticle: PollArticle): void{
    pollArticle.title = pollArticles.title;
  }

}
