import { Component, OnInit } from '@angular/core';

enum NotificationActiveType{
  Active="active",
  None="",
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public notificationActive:NotificationActiveType = NotificationActiveType.None;
  constructor() { }

  ngOnInit(): void {
  }

  public activeNotification(): void {
    if (this.notificationActive === NotificationActiveType.None) {
      this.notificationActive = NotificationActiveType.Active;
    }
    else{
      this.notificationActive = NotificationActiveType.None;
    }
  }
}
