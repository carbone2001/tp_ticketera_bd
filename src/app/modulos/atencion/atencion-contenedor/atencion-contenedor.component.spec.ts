import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionContenedorComponent } from './atencion-contenedor.component';

describe('AtencionContenedorComponent', () => {
  let component: AtencionContenedorComponent;
  let fixture: ComponentFixture<AtencionContenedorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionContenedorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtencionContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
