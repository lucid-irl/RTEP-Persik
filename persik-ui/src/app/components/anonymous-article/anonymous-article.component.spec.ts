import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousArticleComponent } from './anonymous-article.component';

describe('AnonymousArticleComponent', () => {
  let component: AnonymousArticleComponent;
  let fixture: ComponentFixture<AnonymousArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
