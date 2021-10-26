import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { PollOption } from 'src/app/models/PollOption';
import { VotePollOption } from 'src/app/models/VotePollOption';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  public votePollOptions : VotePollOption[]=[
    {
      id: 0,
      content: 'win 10',
      point: 20,
    },
    {
      id: 1,
      content: 'win 11',
      point: 80,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

    public OnClickVote(votePollOptions : VotePollOption){
      votePollOptions.point++;
    }

}
