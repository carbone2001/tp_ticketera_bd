import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadNoSeanDeUnaLocalidadComponent } from './cantidad-no-sean-de-una-localidad.component';

describe('CantidadNoSeanDeUnaLocalidadComponent', () => {
  let component: CantidadNoSeanDeUnaLocalidadComponent;
  let fixture: ComponentFixture<CantidadNoSeanDeUnaLocalidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadNoSeanDeUnaLocalidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadNoSeanDeUnaLocalidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
