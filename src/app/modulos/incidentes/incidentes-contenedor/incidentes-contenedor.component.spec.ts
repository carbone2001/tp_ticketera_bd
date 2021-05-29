import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentesContenedorComponent } from './incidentes-contenedor.component';

describe('IncidentesContenedorComponent', () => {
  let component: IncidentesContenedorComponent;
  let fixture: ComponentFixture<IncidentesContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentesContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentesContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
