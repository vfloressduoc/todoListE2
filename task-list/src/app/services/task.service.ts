import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://tasklist-api-rc1k.onrender.com/api/';

  constructor(private http: HttpClient) {}

  // ver tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError));
    
  }

  // agregar/crear
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}create/`, task)
    .pipe(
      catchError(this.handleError));
  }

  // cambiar/detail
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}${task.id}/`, task)
    .pipe(
      catchError(this.handleError));
  }


  // eliminar
  deleteTask(taskId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${taskId}/`)
    .pipe(
      catchError(this.handleError));
  }

private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Error desconocido';
  if (error.error instanceof ErrorEvent) {
    errorMessage = `Error: ${error.error.message}`;
  } else {
    errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

}


