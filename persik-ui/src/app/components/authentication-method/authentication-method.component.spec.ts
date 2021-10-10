import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticationMethodComponent } from './authentication-method.component';

describe('AuthenticationMethodComponent', () => {
  let component: AuthenticationMethodComponent;
  let fixture: ComponentFixture<AuthenticationMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticationMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticationMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
