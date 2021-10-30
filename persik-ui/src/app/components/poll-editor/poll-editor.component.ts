import { Component, OnInit } from '@angular/core';
import { PollItem } from 'src/app/models/PollItem';

@Component({
  selector: 'app-poll-editor',
  templateUrl: './poll-editor.component.html',
  styleUrls: ['./poll-editor.component.scss']
})
export class PollEditorComponent implements OnInit {

  public polls: PollItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.polls.push({ id: 1, content: "", parentPollId: 0 })
  }

  showResults(): void {
    console.log(this.polls);
  }

  onAddPollItem(): void {
    let nextIndex: number = this.polls.length;
    this.polls.push({ id: nextIndex, content: "", parentPollId: 0 });
  }

  onDeletePollItem(index: number): void {
    if (this.polls.length === 1) {
      this.polls[0].content = "";
      return;
    }
    this.polls.splice(index, 1);
  }

  onUp(index: number): void {
    if (index===0){
      return;
    }
    let currentItems: PollItem[] = this.polls.splice(index, 1);
    this.polls.splice(index - 1, 0, currentItems[0]);
  }

  onDown(index: number): void {
    if (index===this.polls.length-1){
      return;
    }
    let currentItems: PollItem[] = this.polls.splice(index, 1);
    this.polls.splice(index + 1, 0, currentItems[0]);
  }

  onContentChanged(e: any, index: number): void {
    this.polls[index].content = e.target.value;
  }
}
