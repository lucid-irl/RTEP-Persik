import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousNavigationBarComponent } from './anonymous-navigation-bar.component';

describe('AnonymousNavigationBarComponent', () => {
  let component: AnonymousNavigationBarComponent;
  let fixture: ComponentFixture<AnonymousNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousNavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
