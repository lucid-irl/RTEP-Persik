import { Component, OnInit } from '@angular/core';
import { AnonyItem } from 'src/app/models/anony-item';

export const ANONY_ITEMS: AnonyItem[] = [
  { title: 'Tim ban trai 1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
  { title: 'Tim ban trai 2', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
  { title: 'Tim ban trai 3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
  { title: 'Tim ban trai 4', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
  { title: 'Tim ban trai 5', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
  { title: 'Tim ban trai 6', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut tempora iusto dignissimos fugiat repellat earum! Eaque doloremque sunt quisquam obcaecati ex sapiente aspernatur, nisi officia similique pariatur beatae, recusandae perspiciatis!' },
];


@Component({
  selector: 'app-anonymous-box',
  templateUrl: './anonymous-box.component.html',
  styleUrls: ['./anonymous-box.component.scss']
})
export class AnonymousBoxComponent implements OnInit {

  public anony_items = ANONY_ITEMS;
  constructor() { }

  ngOnInit(): void {
  }

}
