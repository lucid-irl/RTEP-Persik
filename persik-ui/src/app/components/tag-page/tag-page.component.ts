import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-page',
  templateUrl: './tag-page.component.html',
  styleUrls: ['./tag-page.component.scss']
})
export class TagPageComponent implements OnInit {

  list = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
