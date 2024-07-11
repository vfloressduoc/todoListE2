import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.page.html',
  styleUrls: ['./archive.page.scss'],
})
export class ArchivePage implements OnInit {
  taskList: Task[] = [];

  constructor(
    private taskService: TaskService,
    private alertController: AlertController
  ) {}

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

  async deleteTask(task: Task) {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: `¿Estás seguro/a de eliminar la tarea "${task.itemName}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.taskService.deleteTask(task.id).toPromise(); // Assuming deleteTask returns a promise
            this.loadCompletedTasks(); // Reload the task list after deletion
          }
        }
      ]
    });

    await alert.present();
  }
}
