import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationCandidatComponent } from './evaluation-candidat.component';

describe('EvaluationCandidatComponent', () => {
  let component: EvaluationCandidatComponent;
  let fixture: ComponentFixture<EvaluationCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
