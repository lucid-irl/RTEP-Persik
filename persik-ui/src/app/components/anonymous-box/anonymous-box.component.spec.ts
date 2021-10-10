import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousBoxComponent } from './anonymous-box.component';

describe('AnonymousBoxComponent', () => {
  let component: AnonymousBoxComponent;
  let fixture: ComponentFixture<AnonymousBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
