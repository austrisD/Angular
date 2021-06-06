import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = 'tasks manager';
  author: string = 'Austris';

  ShowAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.ShowAddTask = value));
  }
  
  ngOnInit(): void {}

  ToggleAddTask() {
    console.log('toggle task function in header.component');
    this.uiService.toggleAddTask();
  }
}
