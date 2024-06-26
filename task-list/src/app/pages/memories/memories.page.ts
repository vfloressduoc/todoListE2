import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewModalPage } from './image-view-modal/image-view-modal.page';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Memory {
  id: number;
  thumbnailUrl: SafeResourceUrl;
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
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.loadDefaultMemories();
  }

  loadDefaultMemories() {
    // Cargar imágenes desde assets como ejemplos
    for (let i = 1; i <= 9; i++) {
      const imageUrl = `assets/photos/photo${i}.jpg`;
      this.memories.push({
        id: i,
        thumbnailUrl: this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl)
      });
    }
  }

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        saveToGallery: false
      });

      this.imageSource = this.domSanitizer.bypassSecurityTrustResourceUrl(image.webPath ? image.webPath : '');
      if (this.imageSource) {
        const newMemory: Memory = {
          id: this.memories.length + 1,
          thumbnailUrl: this.imageSource
        };
        this.memories.push(newMemory);
      }
    } catch (error) {
      console.error('Error al tomar la imagen', error);
    }
  }

  removeMemory(memoryId: number) {
    this.memories = this.memories.filter(memory => memory.id !== memoryId);
  }

  async viewImage(memory: Memory) {
    const modal = await this.modalController.create({
      component: ImageViewModalPage,
      componentProps: {
        imageUrl: memory.thumbnailUrl,
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
}
