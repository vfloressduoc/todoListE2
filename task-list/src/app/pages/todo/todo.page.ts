import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { AddTaskPage } from '../add-task/add-task.page';
import { Task } from '../../models/task.model';
import { EditTaskPage } from '../edit-task/edit-task.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  taskList: Task[] = [];
  today: Date = new Date();

  constructor(private taskService: TaskService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadTasks(); // Cargar las tareas al iniciar la página
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.taskList = tasks.filter(task => !task.completed);
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

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        const newTaskObj: Task = data.data;
        console.log('New Task Object:', newTaskObj);
        this.taskService.updateTask(newTaskObj).subscribe(
          () => {
            this.loadTasks(); // Recargar las tareas después de agregar una nueva
          },
          error => {
            console.error('Error updating task', error);
          }
        );
      }
    });

    return await modal.present();
  }

  async editTask(task: Task) {
    const modal = await this.modalCtrl.create({
      component: EditTaskPage,
      componentProps: {
        task: { ...task } // Pasar una copia de la tarea seleccionada al modal de edición
      }
    });
    await modal.present();
  }


  completeTask(task: Task) {
    task.completed = true;
    this.taskService.updateTask(task).subscribe(() => this.loadTasks());
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task.id).subscribe(() => this.loadTasks());
  }
}
