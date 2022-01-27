import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeLancerComponent } from './free-lancer.component';

describe('FreeLancerComponent', () => {
  let component: FreeLancerComponent;
  let fixture: ComponentFixture<FreeLancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeLancerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeLancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
