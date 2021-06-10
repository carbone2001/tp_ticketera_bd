import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarTicketsCercanosComponent } from './buscar-tickets-cercanos.component';

describe('BuscarTicketsCercanosComponent', () => {
  let component: BuscarTicketsCercanosComponent;
  let fixture: ComponentFixture<BuscarTicketsCercanosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarTicketsCercanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarTicketsCercanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
