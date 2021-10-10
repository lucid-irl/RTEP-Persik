import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.scss']
})
export class NotificationItemComponent implements OnInit {

  @Input() avatarUrl: string = '';
  @Input() notificationContent: string = '';
  @Input() publicDate: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
