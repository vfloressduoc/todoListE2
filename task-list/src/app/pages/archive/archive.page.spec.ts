import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { ArchivePage } from './archive.page';
import { TaskService } from '../../services/task.service';

describe('ArchivePage', () => {
  let component: ArchivePage;
  let fixture: ComponentFixture<ArchivePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArchivePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [TaskService]
    }).compileComponents();

    fixture = TestBed.createComponent(ArchivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
