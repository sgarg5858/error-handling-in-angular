import { TestBed } from '@angular/core/testing';

import { DevGlobalErrorHandlerService } from './dev-global-error-handler.service';

describe('DevGlobalErrorHandlerService', () => {
  let service: DevGlobalErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevGlobalErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
