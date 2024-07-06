import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { ImageViewModalPage } from './image-view-modal.page';

describe('ImageViewModalPage', () => {
  let component: ImageViewModalPage;
  let fixture: ComponentFixture<ImageViewModalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageViewModalPage],
      imports: [IonicModule.forRoot()],
      providers: [ModalController]
    }).compileComponents();

    fixture = TestBed.createComponent(ImageViewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
