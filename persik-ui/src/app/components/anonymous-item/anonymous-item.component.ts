import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-anonymous-item',
  templateUrl: './anonymous-item.component.html',
  styleUrls: ['./anonymous-item.component.scss']
})
export class AnonymousItemComponent {

  @Input() title: string = "";
  @Input() content: string= "";

  constructor() { }

  ngOnInit(): void {

  }

}
