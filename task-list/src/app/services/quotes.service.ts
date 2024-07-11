import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesApiUrl = 'https://vfloressduoc.github.io/quotesReminder_api/quotes.json';
  private remindersApiUrl = 'https://vfloressduoc.github.io/quotesReminder_api/reminders.json';

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) { }

  async fetchRandomMessage() {
    try {
      const [quotesResponse, remindersResponse] = await Promise.all([
        this.http.get<any[]>(this.quotesApiUrl).toPromise(),
        this.http.get<any[]>(this.remindersApiUrl).toPromise()
      ]);

      console.log('Quotes Response:', quotesResponse);
      console.log('Reminders Response:', remindersResponse);

      if (!quotesResponse || !remindersResponse) {
        throw new Error('Una o ambas respuestas de la API son indefinidas.');
      }

      const allMessages = [...quotesResponse, ...remindersResponse];
      const randomMessage = allMessages[Math.floor(Math.random() * allMessages.length)];
      
      console.log('Random Message:', randomMessage);

      const messageText = randomMessage.quote_text || randomMessage.text;
      const messageAuthor = randomMessage.author || 'PenguPlan';

      this.presentMessageAlert(messageText, messageAuthor);
    } catch (error) {
      console.error('Error recuperando el mensaje', error);
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
