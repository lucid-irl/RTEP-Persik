import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post-editor',
  templateUrl: './post-editor.component.html',
  styleUrls: ['./post-editor.component.scss']
})
export class PostEditorComponent implements OnInit {
  @ViewChild('editor') editor: any;

  constructor() { }

  ngOnInit(): void {
  }

}
