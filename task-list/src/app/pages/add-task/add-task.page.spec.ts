import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { AddTaskPage } from './add-task.page';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { expect } from 'chai'; // Import the expect assertion method

describe('AddTaskPage', () => {
  let component: AddTaskPage;
  let fixture: ComponentFixture<AddTaskPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTaskPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule // Add HttpClientModule here
      ],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok; // Use the 'to.be.ok' assertion method instead of 'toBeTruthy'
  });
});
