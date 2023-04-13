import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobshowComponent } from './jobshow.component';

describe('JobshowComponent', () => {
  let component: JobshowComponent;
  let fixture: ComponentFixture<JobshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
