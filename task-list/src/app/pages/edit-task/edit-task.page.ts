import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  providers: [DatePipe]
})
export class EditTaskPage implements OnInit {
  isSelected(index: number): boolean {
    return this.taskCategory === index;
  }
  @Input() task!: Task; // Tarea recibida como entrada desde el componente padre
  categories = ['UNI', 'Casa', 'Trabajo', 'Personal', 'Otro'];
  taskCategory: number = 0;

  constructor(
    private modalCtrl: ModalController,
    private datePipe: DatePipe,
    private taskService: TaskService
  ) {}

  ngOnInit() {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  selectCategory(index: number) {
    this.taskCategory = index;
  }

  saveChanges() {
    // Actualizar la tarea
    this.task.itemCategory = this.categories[this.taskCategory]; // Asignar la categoría
    this.taskService.updateTask(this.task).subscribe(
      updatedTask => {
        console.log('Tarea actualizada exitosamente:', updatedTask);
        this.dismiss();
      },
      error => {
        console.error('Error al actualizar la tarea', error);
      }
    );
  }

  handleDateChange(event: CustomEvent) {
    const date = new Date(event.detail.value);
    this.task.itemDate = this.datePipe.transform(date, 'MMM dd yyyy HH:mm') || '';
  }
}
