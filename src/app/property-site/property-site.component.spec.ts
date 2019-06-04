import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySiteComponent } from './property-site.component';

describe('PropertySiteComponent', () => {
  let component: PropertySiteComponent;
  let fixture: ComponentFixture<PropertySiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertySiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
