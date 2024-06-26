// src/app/services/camera.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor () {}

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  }

  // private picsumApiUrl = 'https://picsum.photos/v2/list?page=2&limit=10';

  // constructor(private http: HttpClient) {}

  // getMemories() {
  //   return this.http.get<any[]>(this.picsumApiUrl);
  // }

  // uploadMemory(imageData: string) {
  //   // Implementación para subir la imagen
  // }

  // deleteMemory(memoryId: string) {
  //   // Implementación para borrar la imagen
  // }

  // async takePhoto(): Promise<string | undefined> {
  //   try {
  //     const photo = await Camera.getPhoto({
  //       resultType: CameraResultType.DataUrl,
  //       source: CameraSource.Camera,
  //       quality: 100
  //     });
  //     return photo.dataUrl;
  //   } catch (error) {
  //     console.error('Error taking photo', error);
  //     return undefined;
  //   }
  // }
}
