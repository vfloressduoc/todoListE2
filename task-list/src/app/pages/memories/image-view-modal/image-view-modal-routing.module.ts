import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageViewModalPage } from './image-view-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ImageViewModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImageViewModalPageRoutingModule {}
