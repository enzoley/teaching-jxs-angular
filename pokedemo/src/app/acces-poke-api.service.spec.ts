import { TestBed } from '@angular/core/testing';

import { AccesPokeAPIService } from './acces-poke-api.service';

describe('AccesPokeAPIService', () => {
  let service: AccesPokeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesPokeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
