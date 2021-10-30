import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poll-editor-item',
  templateUrl: './poll-editor-item.component.html',
  styleUrls: ['./poll-editor-item.component.scss']
})
export class PollEditorItemComponent implements OnInit {


  @Input() pollContent: string ="";
  @Output() pollContentChangedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  pollContentChange(event: any): void {
    this.pollContentChangedEvent.emit(this.pollContent);
    console.log(this.pollContent);
  }

}
