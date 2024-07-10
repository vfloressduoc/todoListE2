import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage {
  @Input() task!: Task;

  categories: string[] = ['Uni', 'Personal', 'Trabajo', 'Casa'];  // Example categories

  constructor(public modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }

  saveChanges() {
    this.modalCtrl.dismiss(this.task);
  }

  handleDateChange(event: any) {
    this.task.itemDate = event.detail.value;
  }
}
