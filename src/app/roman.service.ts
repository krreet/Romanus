import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RomanService {

  constructor() { }
// This function coverts arabic number to roman nummber
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
      // Arabic numbers
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
      if (natNo <= 0 || natNo > 3999 || !Number.isInteger(natNo) ) {
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

