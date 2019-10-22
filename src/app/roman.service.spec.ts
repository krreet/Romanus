import { TestBed } from '@angular/core/testing';

import { RomanService } from './roman.service';

describe('RomanService', () => {
  let romanService: RomanService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    romanService = TestBed.get(RomanService);
  });

  it('should be created', () => {
    expect(romanService).toBeTruthy();
  });

  it('should return a roman number', () => {
    const response = romanService.getRoman(456);
    expect(response).toEqual('CDLVI');
  });

  it('should return error if number is 0', () => {
    const response = romanService.getRoman(0);
    expect(response).toEqual('Value must be a natural number greater than 0 and less than 4000');
  });

  it('should return error if number is greater than 3999', () => {
    const response = romanService.getRoman(4000);
    expect(response).toEqual('Value must be a natural number greater than 0 and less than 4000');
  });

  it('should return error if number is a floating number', () => {
    const response = romanService.getRoman(299.1);
    expect(response).toEqual('Value must be a natural number greater than 0 and less than 4000');
  });

  it('should return error if number is a string', () => {
    const response = romanService.getRoman('123');
    expect(response).toEqual('Value must be a natural number greater than 0 and less than 4000');
  });
});


