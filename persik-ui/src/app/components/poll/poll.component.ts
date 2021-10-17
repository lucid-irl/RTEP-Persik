import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  public anony_list = [1, 2,3,4,5,6];
  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.isActive = true;
  }

}
