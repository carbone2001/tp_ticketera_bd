import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesDeUnaLocalidadConCanalComponent } from './clientes-de-una-localidad-con-canal.component';

describe('ClientesDeUnaLocalidadConCanalComponent', () => {
  let component: ClientesDeUnaLocalidadConCanalComponent;
  let fixture: ComponentFixture<ClientesDeUnaLocalidadConCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesDeUnaLocalidadConCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesDeUnaLocalidadConCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
