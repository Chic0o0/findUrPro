import { TestBed } from '@angular/core/testing';

import { BackTalkService } from './back-talk.service';

describe('BackTalkService', () => {
  let service: BackTalkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackTalkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
