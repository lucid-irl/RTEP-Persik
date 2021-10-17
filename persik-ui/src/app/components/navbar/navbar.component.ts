import { Component, OnInit } from '@angular/core';
import { NotificationItem } from '../../models/NotificationItem';


enum NotificationActiveType {
  Active = "active",
  None = "",
}



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public notifications: NotificationItem[] = [
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
    {avatarUrl: "../../../assets/images/241095135_1827315980774811_8230954543138555389_n.jpg", notificationContent:"Content lorem nhuyrnasdasndsamasdadandw qweqwesdasdad", publicDate:"2020-01-01T00:00:00"},
  ]

  public notificationActive: NotificationActiveType = NotificationActiveType.None;
  constructor() { }

  ngOnInit(): void {
  }

  public activeNotification(): void {
    if (this.notificationActive === NotificationActiveType.None) {
      this.notificationActive = NotificationActiveType.Active;
    }
    else {
      this.notificationActive = NotificationActiveType.None;
    }
  }
}
