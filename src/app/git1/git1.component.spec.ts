import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Git1Component } from './git1.component';

describe('Git1Component', () => {
  let component: Git1Component;
  let fixture: ComponentFixture<Git1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Git1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Git1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
