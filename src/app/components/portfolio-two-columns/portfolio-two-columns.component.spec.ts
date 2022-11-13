import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioTwoColumnsComponent } from './portfolio-two-columns.component';

describe('PortfolioTwoColumnsComponent', () => {
  let component: PortfolioTwoColumnsComponent;
  let fixture: ComponentFixture<PortfolioTwoColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioTwoColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioTwoColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
