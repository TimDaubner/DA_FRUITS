import { TestBed } from '@angular/core/testing';

import { Fruitlistdata } from './fruitlistdata';

describe('Fruitlistdata', () => {
  let service: Fruitlistdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fruitlistdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
