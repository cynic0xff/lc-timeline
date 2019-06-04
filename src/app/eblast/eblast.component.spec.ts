import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EblastComponent } from './eblast.component';

describe('EblastComponent', () => {
  let component: EblastComponent;
  let fixture: ComponentFixture<EblastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EblastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EblastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
