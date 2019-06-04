import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialBoostComponent } from './social-boost.component';

describe('SocialBoostComponent', () => {
  let component: SocialBoostComponent;
  let fixture: ComponentFixture<SocialBoostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialBoostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialBoostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
