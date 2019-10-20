import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  constructor() { }

  getRoman(natNo) {

      // Roman Number characters
      const romanNo: Array<string> = [
        'M',
        'CM',
        'D',
        'CD',
        'C',
        'XC',
        'L',
        'XL',
        'X',
        'IX',
        'V',
        'IV',
        'I'
      ];
      // Arabic number
      const arabNo: Array<number> = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
      ];
      // Above 3999 Roman Needs special characters //
      if (natNo <= 0 || natNo > 3999 || typeof natNo === 'string' || !Number.isInteger(natNo) ) {
        // expect(response).toEqual('Value must be aa natural number greater than 0 and less than 4000')
        return 'Value must be a natural number greater than 0 and less than 4000';
      }
      let result: string;
      result = '';
      for (let i = 0; i < romanNo.length; i++) {
        while (natNo >= arabNo[i]) {
          natNo -= arabNo[i];
          result += romanNo[i];
        }
      }

      return result;
    }
  }

