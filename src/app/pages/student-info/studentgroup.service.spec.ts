import { TestBed } from '@angular/core/testing';

import { StudentgroupService } from './studentgroup.service';

describe('StudentgroupService', () => {
  let service: StudentgroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentgroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
