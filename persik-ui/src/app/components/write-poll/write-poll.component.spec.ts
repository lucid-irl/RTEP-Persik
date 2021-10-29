import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritePollComponent } from './write-poll.component';

describe('WritePollComponent', () => {
  let component: WritePollComponent;
  let fixture: ComponentFixture<WritePollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritePollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
