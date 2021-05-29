import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosZonalesContenedorComponent } from './datos-zonales-contenedor.component';

describe('DatosZonalesContenedorComponent', () => {
  let component: DatosZonalesContenedorComponent;
  let fixture: ComponentFixture<DatosZonalesContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosZonalesContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosZonalesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
