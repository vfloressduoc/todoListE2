import { Component, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.page.html',
  styleUrls: ['./image-view-modal.page.scss'],
})
export class ImageViewModalPage {

  @Input() imageUrl: string = '';
  @Input() memoryId: string = '';

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private navCtrl: NavController
  ) {}

  close() {
    this.modalController.dismiss();
  }

  share() {
    console.log('Compartiendo imagen:', this.imageUrl);
    const successMessage = 'Memoria compartida con éxito!';
    this.toastController.create({ message: successMessage, duration: 2000 }).then(toast => toast.present());
  }
  
  delete() {
    console.log('Eliminando imagen:', this.memoryId);
    this.modalController.dismiss({ deleted: true });
  }

  goBack() {
    this.navCtrl.back();
  }
}
