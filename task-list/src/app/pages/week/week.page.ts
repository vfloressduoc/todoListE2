import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { AddTaskPage } from '../add-task/add-task.page';
import { Task } from '../../models/task.model';
import { EditTaskPage } from '../edit-task/edit-task.page';

@Component({
  selector: 'app-week',
  templateUrl: './week.page.html',
  styleUrls: ['./week.page.scss'],
})
export class WeekPage implements OnInit {
  taskList: Task[] = [];
  today: Date = new Date();
  filteredTasks: Task[] = [];

  constructor(private taskService: TaskService, public modalCtrl: ModalController) {}

  ngOnInit() {
    this.loadTasks(); // Cargar las tareas al iniciar la página
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      tasks => {
        this.taskList = tasks.filter(task => {
          // Filtrar las tareas que tienen fecha límite en los próximos 7 días
          const taskDate = new Date(task.itemDate);
          const nextWeek = new Date();
          nextWeek.setDate(nextWeek.getDate() + 7);
          return taskDate <= nextWeek;
        });
        this.filteredTasks = this.taskList.filter(task => !task.completed);
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

    modal.onDidDismiss().then((data) => {
      if (data.data) {
        const editedTask: Task = data.data;
        console.log('Edited Task:', editedTask);
        this.taskService.updateTask(editedTask).subscribe(
          () => {
            this.loadTasks(); // Recargar las tareas después de editar
          },
          error => {
            console.error('Error updating task', error);
          }
        );
      }
    });

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
