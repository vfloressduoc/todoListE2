import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { EditTaskPage } from './edit-task.page';
import { HttpClientModule } from '@angular/common/http';

describe('EditTaskPage', () => {
  let component: EditTaskPage;
  let fixture: ComponentFixture<EditTaskPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTaskPage],
      imports: [IonicModule.forRoot(), HttpClientModule],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
