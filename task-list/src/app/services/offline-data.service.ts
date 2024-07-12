import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfflineDataService {

  constructor() { }

  // Método para guardar datos en el almacenamiento local
  saveData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Método para obtener datos del almacenamiento local
  getData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Método para borrar datos del almacenamiento local
  clearData(key: string) {
    localStorage.removeItem(key);
  }
}
