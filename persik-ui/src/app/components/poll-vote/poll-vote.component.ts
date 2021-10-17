import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {
  public anony_list = [1, 2,3,4,5,6];
  constructor() { }

  ngOnInit(): void {
  }

}
