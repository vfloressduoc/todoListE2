import { Component, OnInit } from '@angular/core';
// import { CameraService } from '../../services/camera.service';
// import { ModalController } from '@ionic/angular';
// import { ImageViewModalPage } from './image-view-modal/image-view-modal.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-memories',
  templateUrl: './memories.page.html',
  styleUrls: ['./memories.page.scss'],
})
export class MemoriesPage {


  imageSource: any
  constructor() { }

  takePicture = async() => {
    const image = await Camera.getPhoto({
      quality : 90,
      allowEditing : false,
      resultType : CameraResultType.DataUrl,
      source : CameraSource.Prompt
    });

    this.imageSource = image.dataUrl;

  }

// implements OnInit {

//   memories: any[] = [];

//   constructor(
//     private cameraService: CameraService,
//     private modalController: ModalController
//   ) {}

//   ngOnInit() {
//     this.loadMemories();
//   }

//   loadMemories() {
//     this.cameraService.getMemories().subscribe(
//       (data) => {
//         this.memories = data;
//       },
//       (error) => {
//         console.error('Error fetching memories', error);
//       }
//     );
//   }

//   async addMemory() {
//     // Implementación de añadir memoria
//   }

//   deleteMemory(memoryId: string) {
//     // Implementación de borrar memoria
//   }

//   async viewImage(memory: any) {
//     const modal = await this.modalController.create({
//       component: ImageViewModalPage,
//       componentProps: {
//         imageUrl: memory.url,
//         memoryId: memory.id
//       }
//     });
//     modal.onDidDismiss().then((data) => {
//       if (data.data && data.data.deleted) {
//         this.loadMemories(); // Recargar memorias si se eliminó una imagen
//       }
//     });
//     return await modal.present();
//   }

//   shareMemory(memory: any) {
//     // Implementación de compartir (mock, por ejemplo, mostrar un mensaje)
//     console.log('Compartiendo memoria:', memory);
//   }
}
