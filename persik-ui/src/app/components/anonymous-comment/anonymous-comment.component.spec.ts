import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousCommentComponent } from './anonymous-comment.component';

describe('AnonymousCommentComponent', () => {
  let component: AnonymousCommentComponent;
  let fixture: ComponentFixture<AnonymousCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
