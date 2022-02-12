import { TestBed } from '@angular/core/testing';

import { FlexTableService } from './flex-table.service';

describe('FlexTableService', () => {
  let service: FlexTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
