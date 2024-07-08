import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
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

  constructor(
    private modalController: ModalController,
    private domSanitizer: DomSanitizer,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loadDefaultMemories();
  }

  loadDefaultMemories() {
    // Load images from assets as examples
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

      const imageUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(image.webPath ? image.webPath : '');
      if (imageUrl) {
        const newMemory: Memory = {
          id: this.memories.length + 1,
          thumbnailUrl: imageUrl
        };
        this.memories.push(newMemory);
      }
    } catch (error) {
      console.error('Error taking picture', error);
    }
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

  removeMemory(memoryId: number) {
    this.memories = this.memories.filter(memory => memory.id !== memoryId);
  }

  goBack() {
    this.navCtrl.back();
  }
}
