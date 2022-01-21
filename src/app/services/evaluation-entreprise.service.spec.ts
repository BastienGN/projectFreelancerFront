import { TestBed } from '@angular/core/testing';

import { EvaluationEntrepriseService } from './evaluation-entreprise.service';

describe('EvaluationEntrepriseService', () => {
  let service: EvaluationEntrepriseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationEntrepriseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
