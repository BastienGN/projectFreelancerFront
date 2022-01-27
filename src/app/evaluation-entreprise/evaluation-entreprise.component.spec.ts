import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationEntrepriseComponent } from './evaluation-entreprise.component';

describe('EvaluationEntrepriseComponent', () => {
  let component: EvaluationEntrepriseComponent;
  let fixture: ComponentFixture<EvaluationEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
