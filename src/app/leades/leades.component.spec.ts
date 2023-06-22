import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadesComponent } from './leades.component';

describe('LeadesComponent', () => {
  let component: LeadesComponent;
  let fixture: ComponentFixture<LeadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadesComponent]
    });
    fixture = TestBed.createComponent(LeadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
