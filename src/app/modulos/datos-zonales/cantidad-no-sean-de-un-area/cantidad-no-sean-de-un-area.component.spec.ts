import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadNoSeanDeUnAreaComponent } from './cantidad-no-sean-de-un-area.component';

describe('CantidadNoSeanDeUnAreaComponent', () => {
  let component: CantidadNoSeanDeUnAreaComponent;
  let fixture: ComponentFixture<CantidadNoSeanDeUnAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadNoSeanDeUnAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadNoSeanDeUnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
