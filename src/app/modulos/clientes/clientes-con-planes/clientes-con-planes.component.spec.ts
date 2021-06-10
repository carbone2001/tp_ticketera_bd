import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesConPlanesComponent } from './clientes-con-planes.component';

describe('ClientesConPlanesComponent', () => {
  let component: ClientesConPlanesComponent;
  let fixture: ComponentFixture<ClientesConPlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesConPlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesConPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
