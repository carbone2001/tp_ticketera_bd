import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioMasCercanoParaTicketComponent } from './servicio-mas-cercano-para-ticket.component';

describe('ServicioMasCercanoParaTicketComponent', () => {
  let component: ServicioMasCercanoParaTicketComponent;
  let fixture: ComponentFixture<ServicioMasCercanoParaTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioMasCercanoParaTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioMasCercanoParaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
