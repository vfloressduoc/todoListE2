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
  @Input() task: Task = {
    itemName: '',
    itemCategory: '',
    itemPriority: '',
    itemDate: '',
    completed: false,
    description: null,
    id: 0 // Ensure id is initialized as a number
  };

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
    // Assign the selected category to task.itemCategory
    this.task.itemCategory = this.categories[this.taskCategory];

    // Update the task using TaskService
    this.taskService.updateTask(this.task).subscribe(
      updatedTask => {
        console.log('Tarea actualizada exitosamente:', updatedTask);
        this.dismiss(); // Close the modal after saving changes
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
