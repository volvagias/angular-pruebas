import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebitasComponent } from './pruebitas.component';

describe('PruebitasComponent', () => {
  let component: PruebitasComponent;
  let fixture: ComponentFixture<PruebitasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PruebitasComponent]
    });
    fixture = TestBed.createComponent(PruebitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
