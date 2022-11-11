import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSecComponent } from './first-sec.component';

describe('FirstSecComponent', () => {
  let component: FirstSecComponent;
  let fixture: ComponentFixture<FirstSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
