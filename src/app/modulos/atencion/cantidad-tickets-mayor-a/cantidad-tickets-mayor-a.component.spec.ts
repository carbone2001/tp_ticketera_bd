import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadTicketsMayorAComponent } from './cantidad-tickets-mayor-a.component';

describe('CantidadTicketsMayorAComponent', () => {
  let component: CantidadTicketsMayorAComponent;
  let fixture: ComponentFixture<CantidadTicketsMayorAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadTicketsMayorAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadTicketsMayorAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
