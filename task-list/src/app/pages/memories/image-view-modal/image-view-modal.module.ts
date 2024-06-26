import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageViewModalPageRoutingModule } from './image-view-modal-routing.module';

import { ImageViewModalPage } from './image-view-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageViewModalPageRoutingModule
  ],
  declarations: [ImageViewModalPage]
})
export class ImageViewModalPageModule {}
