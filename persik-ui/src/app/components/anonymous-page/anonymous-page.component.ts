import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-anonymous-page',
  templateUrl: './anonymous-page.component.html',
  styleUrls: ['./anonymous-page.component.scss']
})
export class AnonymousPageComponent implements OnInit {

  public anony_list = [1, 2, 3, 4, 5, 6, 7];

  constructor() { }

  ngOnInit(): void {
  }

}
