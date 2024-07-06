import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { WeekPage } from './week.page';
import { TaskService } from 'src/app/services/task.service';

describe('WeekPage', () => {
  let component: WeekPage;
  let fixture: ComponentFixture<WeekPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeekPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [TaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
