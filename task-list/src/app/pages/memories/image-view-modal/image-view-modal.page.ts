import { Component, Input } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser'; // Import SafeResourceUrl and DomSanitizer

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.page.html',
  styleUrls: ['./image-view-modal.page.scss'],
})
export class ImageViewModalPage {

  @Input() imageUrl: SafeResourceUrl = ''; // Ensure imageUrl is correctly typed as SafeResourceUrl
  @Input()  memoryId: number | undefined;

  constructor(
    private modalController: ModalController,
    private toastController: ToastController,
    private navCtrl: NavController,
    private domSanitizer: DomSanitizer // Inject DomSanitizer
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
    this.modalController.dismiss({ deleted: true });
  }

  goBack() {
    this.navCtrl.back();
  }
}
