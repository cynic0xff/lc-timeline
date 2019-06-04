import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTvProofComponent } from './video-tv-proof.component';

describe('VideoTvProofComponent', () => {
  let component: VideoTvProofComponent;
  let fixture: ComponentFixture<VideoTvProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTvProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTvProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
