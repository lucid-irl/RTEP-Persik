import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLargeArticleComponent } from './super-large-article.component';

describe('SuperLargeArticleComponent', () => {
  let component: SuperLargeArticleComponent;
  let fixture: ComponentFixture<SuperLargeArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperLargeArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperLargeArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
