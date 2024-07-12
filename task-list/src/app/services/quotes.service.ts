import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { OfflineDataService } from './offline-data.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesApiUrl = 'https://vfloressduoc.github.io/quotesReminder_api/quotes.json';
  private remindersApiUrl = 'https://vfloressduoc.github.io/quotesReminder_api/reminders.json';
  private offlineQuotesKey = 'offline_quotes';

  constructor(
    private http: HttpClient,
    private alertController: AlertController,
    private offlineDataService: OfflineDataService
  ) { }

  fetchRandomMessage() {
    return this.http.get<any[]>(this.quotesApiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener citas desde la API:', error);
        return throwError('Error al obtener citas desde la API');
      })
    );
  }

  fetchRandomReminder() {
    return this.http.get<any[]>(this.remindersApiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener recordatorios desde la API:', error);
        return throwError('Error al obtener recordatorios desde la API');
      })
    );
  }

  async handleMessages() {
    try {
      const [quotesResponse, remindersResponse] = await Promise.all([
        this.fetchRandomMessage().toPromise(),
        this.fetchRandomReminder().toPromise()
      ]);

      if (quotesResponse && remindersResponse) {
        console.log('Quotes Response:', quotesResponse);
        console.log('Reminders Response:', remindersResponse);

        // Guardar datos en el almacenamiento local en caso de éxito
        this.offlineDataService.saveData(this.offlineQuotesKey, { quotes: quotesResponse, reminders: remindersResponse });

        const allMessages = [...quotesResponse, ...remindersResponse];
        const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)];

        console.log('Random Message:', randomMessage);

        const messageText = randomMessage.quote_text || randomMessage.text;
        const messageAuthor = randomMessage.author || 'PenguPlan';

        this.presentMessageAlert(messageText, messageAuthor);
      } else {
        console.error('No se recibieron respuestas válidas de las API');
      }
    } catch (error) {
      console.error('Error recuperando el mensaje:', error);

      // Manejar errores específicos como HttpErrorResponse
      if (error instanceof HttpErrorResponse && error.status === 0) {
        console.log('Error de red: No se puede acceder a la API');
        // Intentar cargar datos almacenados localmente en caso de error de red
        const storedData = this.offlineDataService.getData(this.offlineQuotesKey);
        if (storedData && storedData.quotes && storedData.reminders) {
          const allMessages = [...storedData.quotes, ...storedData.reminders];
          const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)];
          const messageText = randomMessage.quote_text || randomMessage.text;
          const messageAuthor = randomMessage.author || 'PenguPlan';
          this.presentMessageAlert(messageText, messageAuthor);
        } else {
          console.error('No se encontraron datos almacenados localmente.');
        }
      } else {
        // Otros errores no manejados específicamente
        console.error('Error desconocido:', error);
      }
    }
  }

  async presentMessageAlert(messageText: string, messageAuthor: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje del día',
      message: `${messageText}\n\n- ${messageAuthor}`,
      buttons: ['Ánimo!']
    });

    await alert.present();
  }
}
