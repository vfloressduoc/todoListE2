import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {}

  getTasks(): Observable<Task[]> {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    return of(tasks);
  }

  getCompletedTasks(): Observable<Task[]> {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const completedTasks = tasks.filter((task: Task) => task.completed);
    return of(completedTasks);
  }

  updateTask(task: Task): Observable<any> {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = tasks.map((t: Task) => (t.id === task.id ? task : t));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return of(task);
  }

  deleteTask(id: number): Observable<any> {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = tasks.filter((task: Task) => task.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    return of(null);
  }

  addTask(task: Task): Observable<Task> {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    return of(task);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
