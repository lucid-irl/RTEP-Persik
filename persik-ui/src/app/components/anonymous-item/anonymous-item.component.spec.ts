import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousItemComponent } from './anonymous-item.component';

describe('AnonymousItemComponent', () => {
  let component: AnonymousItemComponent;
  let fixture: ComponentFixture<AnonymousItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
