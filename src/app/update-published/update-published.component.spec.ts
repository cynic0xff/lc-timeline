import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePublishedComponent } from './update-published.component';

describe('UpdatePublishedComponent', () => {
  let component: UpdatePublishedComponent;
  let fixture: ComponentFixture<UpdatePublishedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePublishedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
