import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  public userId: string = "";
  public userUrl: string = `http://localhost:4200/user/${this.userId}`;
  
  constructor() { }

  ngOnInit(): void {
  }

}
