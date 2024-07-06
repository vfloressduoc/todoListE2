import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { MemoriesPage } from './memories.page';

describe('MemoriesPage', () => {
  let component: MemoriesPage;
  let fixture: ComponentFixture<MemoriesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoriesPage ],
      imports: [IonicModule.forRoot()],
      providers: [ModalController]
    }).compileComponents();
    
    fixture = TestBed.createComponent(MemoriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
