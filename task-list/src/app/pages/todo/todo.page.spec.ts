import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { TodoPage } from './todo.page';
import { TaskService } from 'src/app/services/task.service';

describe('TodoPage', () => {
  let component: TodoPage;
  let fixture: ComponentFixture<TodoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [TaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
