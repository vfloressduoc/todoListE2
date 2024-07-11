import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { expect } from 'chai'; // Import the expect function from the chai library
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { QuotesService } from '../../services/quotes.service'; // Adjust path as necessary

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Add HttpClientModule here
      declarations: [LoginPage],
      providers: [QuotesService] // Provide QuotesService if used in the component
    }).compileComponents();
    
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok; // Use the to.be.ok assertion instead of toBeTruthy()
  });
});
