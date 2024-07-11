import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
  providers: [DatePipe]
})
export class EditTaskPage {
  @Input() task!: Task;

  categories: string[] = ['Uni', 'Personal', 'Trabajo', 'Casa'];  // Example categories
  itemCategory: number = 0;
  itemDate: any;

  constructor(public modalCtrl: ModalController, private datePipe: DatePipe) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveChanges() {
    // Asigna la categoría seleccionada y la fecha formateada al objeto de tarea antes de cerrar el modal
    this.task.itemCategory = this.categories[this.itemCategory];
    this.task.itemDate = this.itemDate || this.task.itemDate; // Usa la fecha seleccionada o mantiene la fecha actual de la tarea
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
