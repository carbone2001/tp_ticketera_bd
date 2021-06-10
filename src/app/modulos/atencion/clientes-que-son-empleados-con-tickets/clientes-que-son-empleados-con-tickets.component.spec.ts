import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesQueSonEmpleadosConTicketsComponent } from './clientes-que-son-empleados-con-tickets.component';

describe('ClientesQueSonEmpleadosConTicketsComponent', () => {
  let component: ClientesQueSonEmpleadosConTicketsComponent;
  let fixture: ComponentFixture<ClientesQueSonEmpleadosConTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesQueSonEmpleadosConTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesQueSonEmpleadosConTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
