import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesContenedorComponent } from './clientes-contenedor.component';

describe('ClientesContenedorComponent', () => {
  let component: ClientesContenedorComponent;
  let fixture: ComponentFixture<ClientesContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
