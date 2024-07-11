import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  providers: [DatePipe]
})
export class AddTaskPage {
  task: Task = {
    id: Date.now(),
    completed: false,
    description: null,
    itemCategory: '', // Inicializa con una categoría vacía
    itemDate: '', // Inicializa con una cadena vacía para la fecha
    itemName: '',
    itemPriority: ''
  };

  categories: string[] = ['Uni', 'Personal', 'Trabajo', 'Casa'];
  itemCategory: number = 0;
  itemDate: any;

  constructor(public modalCtrl: ModalController, private datePipe: DatePipe) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveTask() {
    // Asigna la categoría seleccionada y la fecha formateada al objeto de tarea antes de cerrar el modal
    this.task.itemCategory = this.categories[this.itemCategory];
    this.task.itemDate = this.itemDate || new Date().toISOString(); // Usa la fecha seleccionada o la fecha actual si no se seleccionó ninguna
    this.modalCtrl.dismiss(this.task);
  }

  selectCategory(index: number) {
    this.itemCategory = index;
  }

  isSelected(index: number): boolean {
    return this.itemCategory === index;
  }

  handleDateChange(event: CustomEvent) {
    const date = new Date(event.detail.value);
    this.itemDate = this.datePipe.transform(date, 'yyyy-MM-ddTHH:mm:ss.SSSZ') || '';
  }
}
