import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'tasks manager';
  author: string = 'Austris';

  constructor() {}
  ngOnInit(): void {}

  ToggleAddTask() {
    console.log('toggle task');
  }
}
