import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckformComponent } from './checkform.component';

describe('CheckformComponent', () => {
  let component: CheckformComponent;
  let fixture: ComponentFixture<CheckformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckformComponent]
    });
    fixture = TestBed.createComponent(CheckformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
