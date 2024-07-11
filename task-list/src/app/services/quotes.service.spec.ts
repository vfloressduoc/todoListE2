import { TestBed } from '@angular/core/testing';
import { expect } from 'chai'; // Import the expect function from the chai library
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { QuotesService } from './quotes.service';

describe('QuotesService', () => {
  let service: QuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule here
      providers: [QuotesService]
    });
    service = TestBed.inject(QuotesService);
  });

  it('should be created', () => {
    expect(service).to.be.ok; // Use the expect function to assert the truthiness of the service
  });
});
