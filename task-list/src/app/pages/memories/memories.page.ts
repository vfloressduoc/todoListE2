import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ActionSheetController } from '@ionic/angular';
import { ImageViewModalPage } from './image-view-modal/image-view-modal.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
interface Memory {
  id: number;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-memories',
  templateUrl: './memories.page.html',
  styleUrls: ['./memories.page.scss'],
})
export class MemoriesPage implements OnInit {

  memories: Memory[] = [];
  imageSource: SafeResourceUrl | undefined;

  constructor(
    private actionSheetController: ActionSheetController,
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadMemories();
  }

  loadMemories() {
    const storedMemories = localStorage.getItem('memories');
    if (storedMemories) {
    } else {
      this.loadDefaultMemories();
    }
  }

  loadDefaultMemories() {
    for (let i = 1; i <= 9; i++) {
      const imageUrl = `assets/photos/photo${i}.jpg`;
      this.memories.push({
        id: i,
        thumbnailUrl: imageUrl
      });
    }
  }

  async takePicture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Selecciona una opción',
      buttons: [
        {
          text: 'Tomar foto',
          icon: 'camera',
          handler: () => {
            this.capturePicture(CameraSource.Camera);
          }
        },
        {
          text: 'Seleccionar foto',
          icon: 'image',
          handler: () => {
            this.capturePicture(CameraSource.Photos);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel'
        }
      ]
    });
    await actionSheet.present();
  }

  async capturePicture(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: source,
        saveToGallery: false
      });

      if (image.webPath) {
        const newMemory: Memory = {
          id: new Date().getTime(), // Unique ID based on timestamp
          thumbnailUrl: image.webPath // Store as string
        };
        this.memories.push(newMemory);
        this.saveMemories();
      }
    } catch (error) {
      console.error('Error al tomar la imagen', error);
      if (error instanceof DOMException) {
        console.error('DOMException details:', error.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }

  saveMemories() {
    localStorage.setItem('memories', JSON.stringify(this.memories));
  }

  removeMemory(memoryId: number) {
    this.memories = this.memories.filter(memory => memory.id !== memoryId);
    this.saveMemories();
  }

  getSafeResourceUrl(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }  

  async viewImage(memory: Memory) {
    const modal = await this.modalController.create({
      component: ImageViewModalPage,
      componentProps: {
        imageUrl: this.getSafeResourceUrl(memory.thumbnailUrl),
        memoryId: memory.id
      }
    });

    modal.onDidDismiss().then((data) => {
      if (data.data && data.data.deleted) {
        this.removeMemory(memory.id);
      }
    });

    return await modal.present();
  }
  goBack() {
    this.navCtrl.back();
  }

}

