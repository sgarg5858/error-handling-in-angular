import { TestBed } from '@angular/core/testing';

import { ProdGlobalErrorHandlerService } from './prod-global-error-handler.service';

describe('ProdGlobalErrorHandlerService', () => {
  let service: ProdGlobalErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdGlobalErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
