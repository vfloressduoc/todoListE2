import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-image-view-modal',
  templateUrl: './image-view-modal.page.html',
  styleUrls: ['./image-view-modal.page.scss'],
})
export class ImageViewModalPage implements OnInit {

  @Input() imageUrl: string = '';
  @Input() memoryId: string = '';

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.imageUrl = this.navParams.get('imageUrl');
    this.memoryId = this.navParams.get('memoryId');
  }

  close() {
    this.modalController.dismiss();
  }

  share() {
    // Implementación de compartir (mock, por ejemplo, mostrar un mensaje)
    console.log('Compartiendo imagen:', this.imageUrl);
  }

  delete() {
    // Implementación de borrar (puedes implementar la lógica para borrar la imagen aquí)
    console.log('Eliminando imagen:', this.memoryId);
    this.modalController.dismiss({ deleted: true });
  }
}
