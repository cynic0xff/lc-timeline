import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailerProofComponent } from './mailer-proof.component';

describe('MailerProofComponent', () => {
  let component: MailerProofComponent;
  let fixture: ComponentFixture<MailerProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailerProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailerProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
