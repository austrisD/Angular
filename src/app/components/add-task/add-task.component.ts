import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('add task input');
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //send to parent component
    this.onAddTask.emit(newTask);

    //clear a form.
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
