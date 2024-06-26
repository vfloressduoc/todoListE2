import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../services/task.service';
import { AddTaskPage } from '../pages/add-task/add-task.page';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  taskList: Task[] = [];
  weekTaskList: Task[] = [];
  archiveList: Task[] = [];
  today: number = Date.now();

  constructor(private taskService: TaskService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      tasks => {
        const today = new Date();
        const weekFromToday = new Date();
        weekFromToday.setDate(today.getDate() + 7);

        this.taskList = tasks.filter(task => !task.completed);
        this.weekTaskList = tasks.filter(task => {
          const taskDate = new Date(task.itemDate);
          return taskDate >= today && taskDate <= weekFromToday && !task.completed;
        });
        this.archiveList = tasks.filter(task => task.completed);
      },
      error => {
        console.error('Error loading tasks', error);
      }
    );
  }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskPage,
    });

    const { data } = await modal.onDidDismiss();
    if (data) {
      const newTaskObj: Task = data;
      this.taskList.push(newTaskObj);
      this.taskService.updateTask(newTaskObj).subscribe();
    }

    return await modal.present();
  }

  completeTask(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task).subscribe(() => this.loadTasks());
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => this.loadTasks());
  }
}
