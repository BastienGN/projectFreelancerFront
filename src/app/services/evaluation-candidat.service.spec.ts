import { TestBed } from '@angular/core/testing';

import { EvaluationCandidatService } from './evaluation-candidat.service';

describe('EvaluationCandidatService', () => {
  let service: EvaluationCandidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationCandidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
