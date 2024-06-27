// app-routing.module.ts

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'add-task',
    loadChildren: () => import('./pages/add-task/add-task.module').then(m => m.AddTaskPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-task',
    loadChildren: () => import('./pages/edit-task/edit-task.module').then(m => m.EditTaskPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'todo',
    loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'week',
    loadChildren: () => import('./pages/week/week.module').then(m => m.WeekPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'memories',
    loadChildren: () => import('./pages/memories/memories.module').then(m => m.MemoriesPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'archive',
    loadChildren: () => import('./pages/archive/archive.module').then(m => m.ArchivePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
