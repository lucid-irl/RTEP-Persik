import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollEditorItemComponent } from './poll-editor-item.component';

describe('PollEditorItemComponent', () => {
  let component: PollEditorItemComponent;
  let fixture: ComponentFixture<PollEditorItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollEditorItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollEditorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
