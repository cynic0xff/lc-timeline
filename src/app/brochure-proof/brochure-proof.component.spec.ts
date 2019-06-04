import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochureProofComponent } from './brochure-proof.component';

describe('BrochureProofComponent', () => {
  let component: BrochureProofComponent;
  let fixture: ComponentFixture<BrochureProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrochureProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrochureProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
