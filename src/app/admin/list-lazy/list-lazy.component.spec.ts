import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLazyComponent } from './list-lazy.component';

describe('ListLazyComponent', () => {
  let component: ListLazyComponent;
  let fixture: ComponentFixture<ListLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
