import { TestBed, inject } from '@angular/core/testing';

import { TableapiService } from './tableapi.service';

describe('TableapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableapiService]
    });
  });

  it('should be created', inject([TableapiService], (service: TableapiService) => {
    expect(service).toBeTruthy();
  }));
});
