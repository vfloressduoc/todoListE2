import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

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
  categories = ['UNI', 'Casa', 'Trabajo', 'Personal', 'Otro']

  taskName: any
  taskDate: any
  taskPriority: any
  taskCategory: any
  
  taskObject: any;

  constructor(public modalCtrl: ModalController, private datePipe: DatePipe) { } 

  ngOnInit() { }

  async dismiss() {
    await this.modalCtrl.dismiss(this.taskObject);
  }

  selectedCategory(index: number) {
    this.taskCategory = this.categories[index];
  }

  AddTask() {
      this.taskObject = ({itemName:this.taskName, 
                          itemDate:this.taskDate, 
                          itemPriority:this.taskPriority, 
                          itemCategory:this.taskCategory})
        this.dismiss()
    }

    handleDateChange(event: CustomEvent) {
      const date = new Date(event.detail.value);
      this.taskDate = this.datePipe.transform(date, 'MMM dd yyyy HH:mm') || '';
    }

}


