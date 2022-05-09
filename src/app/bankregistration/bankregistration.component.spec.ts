import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankregistrationComponent } from './bankregistration.component';

describe('BankregistrationComponent', () => {
  let component: BankregistrationComponent;
  let fixture: ComponentFixture<BankregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
