import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideollamadaComponent } from './videollamada.component';

describe('VideollamadaComponent', () => {
  let component: VideollamadaComponent;
  let fixture: ComponentFixture<VideollamadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideollamadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideollamadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
