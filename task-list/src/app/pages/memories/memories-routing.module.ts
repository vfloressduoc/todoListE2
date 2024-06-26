import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriesPage } from './memories.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriesPage
  },  {
    path: 'image-view-modal',
    loadChildren: () => import('./image-view-modal/image-view-modal.module').then( m => m.ImageViewModalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriesPageRoutingModule {}
