import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage {
  task: Task = {
    id: Date.now(),
    completed: false,
    description: null,
    itemCategory: '',
    itemDate: '',
    itemName: '',
    itemPriority: ''
  };

  categories: string[] = ['Uni', 'Personal', 'Trabajo', 'Casa'];  // Example categories

  constructor(public modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveTask() {
    this.modalCtrl.dismiss(this.task);
  }

  handleDateChange(event: any) {
    this.task.itemDate = event.detail.value;
  }
}
