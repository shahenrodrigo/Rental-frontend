import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerManageComponent } from './customer-manage.component';

describe('CustomerManageComponent', () => {
  let component: CustomerManageComponent;
  let fixture: ComponentFixture<CustomerManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
