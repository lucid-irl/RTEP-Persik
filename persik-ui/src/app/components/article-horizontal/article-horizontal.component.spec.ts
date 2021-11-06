import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleHorizontalComponent } from './article-horizontal.component';

describe('ArticleHorizontalComponent', () => {
  let component: ArticleHorizontalComponent;
  let fixture: ComponentFixture<ArticleHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
