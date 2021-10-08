import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeArticleComponent } from './large-article.component';

describe('LargeArticleComponent', () => {
  let component: LargeArticleComponent;
  let fixture: ComponentFixture<LargeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
