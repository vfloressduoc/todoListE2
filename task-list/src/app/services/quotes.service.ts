import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) { }


  async fetchRandomQuote() {
    try {
      const apiUrl = 'https://api.quotable.io/random';
      const response = await this.http.get(apiUrl).toPromise();
      const quoteText = response.quoteText;
      const quoteAuthor = response.quoteAuthor || 'Anónimo';


      this.presentQuoteAlert(quoteText, quoteAuthor);
    } catch (error) {
      console.error('Error recuperando la frase', error);
    }
  }


  async presentQuoteAlert(quoteText: string, quoteAuthor: string) {
    const alert = await this.alertController.create({
      header: 'Frase del día',
      message: `<strong>${quoteText}</strong><br><br> - ${quoteAuthor}`,
      buttons: ['Ánimo!']
    });

    await alert.present();
  }
}
