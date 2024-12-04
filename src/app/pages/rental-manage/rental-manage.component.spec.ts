import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalManageComponent } from './rental-manage.component';

describe('RentalManageComponent', () => {
  let component: RentalManageComponent;
  let fixture: ComponentFixture<RentalManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RentalManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentalManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
