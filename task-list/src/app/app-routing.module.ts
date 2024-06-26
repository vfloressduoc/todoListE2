import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then( m => m.TodoPageModule)
  },  {
    path: 'edit-task',
    loadChildren: () => import('./pages/edit-task/edit-task.module').then( m => m.EditTaskPageModule)
  },
  {
    path: 'memories',
    loadChildren: () => import('./pages/memories/memories.module').then( m => m.MemoriesPageModule)
  },
  {
    path: 'week',
    loadChildren: () => import('./pages/week/week.module').then( m => m.WeekPageModule)
  },
  {
    path: 'archive',
    loadChildren: () => import('./pages/archive/archive.module').then( m => m.ArchivePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
