import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPublishedComponent } from './advertisement-published.component';

describe('AdvertisementPublishedComponent', () => {
  let component: AdvertisementPublishedComponent;
  let fixture: ComponentFixture<AdvertisementPublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementPublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
