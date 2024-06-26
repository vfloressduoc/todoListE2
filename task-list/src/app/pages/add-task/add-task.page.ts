import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service'; // Importar el servicio

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  providers: [DatePipe]
})
export class AddTaskPage implements OnInit {
  showDateTimePicker = false;
  selectedDate: string = '';
  priority: string = '';
  categories = ['UNI', 'Casa', 'Trabajo', 'Personal', 'Otro'];

  taskName: string = '';
  taskDate: string = '';
  taskPriority: string = '';
  taskCategory: number = 0; // Variable para almacenar el índice de la categoría seleccionada

  constructor(
    public modalCtrl: ModalController,
    private datePipe: DatePipe,
    private taskService: TaskService // Inyectar el servicio TaskService
  ) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  selectCategory(index: number) {
    this.taskCategory = index;
  }

  isSelected(index: number): boolean {
    return this.taskCategory === index;
  }

  async AddTask() {
    const newTask: Task = {
      id: 0, 
      itemName: this.taskName,
      itemDate: this.taskDate,
      itemPriority: this.taskPriority,
      itemCategory: this.categories[this.taskCategory], // Utilizar el nombre de la categoría
      completed: false,
      description: null
    };

    this.taskService.addTask(newTask).subscribe(
      () => {
        console.log('Task added successfully');
        this.dismiss();
      },
      error => {
        console.error('Error adding task', error);
      }
    );
  }

  handleDateChange(event: CustomEvent) {
    const date = new Date(event.detail.value);
    this.taskDate = this.datePipe.transform(date, 'MMM dd yyyy HH:mm') || '';
  }
}
