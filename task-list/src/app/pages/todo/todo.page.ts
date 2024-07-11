import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { AddTaskPage } from '../add-task/add-task.page';
import { EditTaskPage } from '../edit-task/edit-task.page';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: Task[] = [];
  completedTaskList: Task[] = [];
  today: number = Date.now();

  constructor(
    public modalCtrl: ModalController,
    private taskService: TaskService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loadTasks(); 
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.taskList = tasks.filter(task => !task.completed);
    });
    this.loadCompletedTasks();
  }

  loadCompletedTasks() {
    this.taskService.getCompletedTasks().subscribe(tasks => {
      this.completedTaskList = tasks;
    });
  }

  async addTask() {
    const modal = await this.modalCtrl.create({
      component: AddTaskPage,
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        const newTaskObj: Task = data.data;
        this.taskService.addTask(newTaskObj).subscribe(() => {
          this.loadTasks(); 
        });
      }
    });

    return await modal.present();
  }

  async editTask(task: Task) {
    const modal = await this.modalCtrl.create({
      component: EditTaskPage,
      componentProps: { task },
    });

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        const updatedTaskObj: Task = data.data;
        this.taskService.updateTask(updatedTaskObj).subscribe(() => {
          this.loadTasks(); 
        });
      }
    });

    return await modal.present();
  }

  completeTask(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task).subscribe(() => {
      this.loadTasks(); 
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.loadTasks(); 
    });
  }
}
