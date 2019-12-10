import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoImpuestoComponent } from './tipo-impuesto.component';

describe('TipoImpuestoComponent', () => {
  let component: TipoImpuestoComponent;
  let fixture: ComponentFixture<TipoImpuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoImpuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoImpuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
