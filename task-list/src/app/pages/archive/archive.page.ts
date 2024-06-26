import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.page.html',
  styleUrls: ['./archive.page.scss'],
})
export class ArchivePage implements OnInit {
  taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadCompletedTasks();
  }

  loadCompletedTasks() {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.taskList = tasks.filter(task => task.completed);
      },
      error => {
        console.error('Error loading completed tasks', error);
      }
    );
  }
}
