import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTaskPage } from '../pages/add-task/add-task.page';

interface Task {
  itemName: string;
  itemDate: string;
  itemPriority: string;
  itemCategory: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  taskList: Task[] = [];

  // taskList = [{
  //   itemName : 'Task 1',
  //   itemDate : '2024-06-27',
  //   itemPriority : 'importante',
  //   itemCategory : 'UNI' 
  // },
  // {
  //   itemName : 'Task 2: Video',
  //   itemDate : '2024-06-26',
  //   itemPriority : 'importante',
  //   itemCategory : 'UNI' 
  // },
  // {
  //   itemName : 'Comprar mercaderia',
  //   itemDate : '2024-06-27',
  //   itemPriority : 'baja',
  //   itemCategory : 'Casa' 
  // },
  // {
  //   itemName : 'Cumpleaños',
  //   itemDate : '2024-06-29',
  //   itemPriority : 'normal',
  //   itemCategory : 'Casa' 
  // },
  // ]

  today : number = Date.now();

  constructor(public modalCtrl:ModalController) {}

  async addTask(){
    const modal = await this.modalCtrl.create({
      component: AddTaskPage
    })

    modal.onDidDismiss().then(newTaskObj =>{
      console.log(newTaskObj.data);
      this.taskList.push(newTaskObj.data);
    })

    return await modal.present();

  }

  delete(index: number){
    this.taskList.splice(index, 1);
  }

}
