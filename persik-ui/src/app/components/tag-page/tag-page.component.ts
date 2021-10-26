import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {

  list = [1, 2, 3, 4 ,5 ,6]

  public Article: Article[] = [
    {
      id: 0,
      title: 'Đừng ai hỏi em tại sao',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      username: "Trần Huy Hoàng",
      tag: "tâm sự",
      commentAmount: 10
    },
    {
      id: 1,
      title: 'Sống như là đã chết',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      username: "Trương A Xin",
      tag: "tình yêu",
      commentAmount: 10
    },
    {
      id: 2,
      title: 'Kem vs Đậu / Bất phân thắng bại',
      content: 'lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet',
      view: 0,
      upvote: 0,
      downvote: 0,
      publicDate: '15/11/2015',
      modifyDate: '15/11/2015',
      thumbnailImage: 'lorem ipsum dolor sit amet',
      isApproved: true,
      isAnonymous: true,
      username: "Đẹp trai lỗi tại ai",
      tag: "bóng đá",
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
      username: "Chữ nghĩa là gì",
      tag: "tâm sự",
      commentAmount: 10
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
