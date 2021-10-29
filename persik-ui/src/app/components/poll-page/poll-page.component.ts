import { Component, OnInit } from '@angular/core';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-poll-page',
  templateUrl: './poll-page.component.html',
  styleUrls: ['./poll-page.component.scss']
})
export class PollPageComponent implements OnInit {

  constructor(public pollService:PollService) { }

  ngOnInit(): void {
    this.pollService.fetchPolls().then((res)=>{
      console.log(res);
      this.pollService.pollsData = res;
    }).catch((err)=>{
      console.log(err);
    });
  }

}
