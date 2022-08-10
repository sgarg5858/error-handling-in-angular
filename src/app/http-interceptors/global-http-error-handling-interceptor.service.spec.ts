import { TestBed } from '@angular/core/testing';

import { GlobalHttpErrorHandlingInterceptorService } from './global-http-error-handling-interceptor.service';

describe('GlobalHttpErrorHandlingInterceptorService', () => {
  let service: GlobalHttpErrorHandlingInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalHttpErrorHandlingInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
