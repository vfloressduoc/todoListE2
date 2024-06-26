import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageViewModalPage } from './image-view-modal.page';

describe('ImageViewModalPage', () => {
  let component: ImageViewModalPage;
  let fixture: ComponentFixture<ImageViewModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageViewModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
