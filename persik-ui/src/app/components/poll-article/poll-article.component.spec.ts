import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollArticleComponent } from './poll-article.component';

describe('PollArticleComponent', () => {
  let component: PollArticleComponent;
  let fixture: ComponentFixture<PollArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PollArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
