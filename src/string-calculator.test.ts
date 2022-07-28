import {StringCalculator} from './string-calculator';

const stringCalculator = new StringCalculator();
describe('Part 1 Test', () => {
  it('should return 0', () => {
    expect(stringCalculator.add('')).toBe(0);
  });
  it('should return 1', () => {
    expect(stringCalculator.add('1')).toBe(1);
  });
  it('should return 2', () => {
    expect(stringCalculator.add('1,1')).toBe(2);
  });
  it('should return 10', () => {
    expect(stringCalculator.add('4,6')).toBe(10);
  });
});

describe('Part 2 Test', () => {
  it('should return 10', () => {
    expect(stringCalculator.add('1,2,3,4')).toBe(10);
  });
  it('should return 0', () => {
    expect(stringCalculator.add('0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0')).toBe(0);
  });
});

describe('Part 3 Test', () => {
  it('should return 10', () => {
    expect(stringCalculator.add('4\n6')).toBe(10);
  });
  it('should return 6', () => {
    expect(stringCalculator.add('1\n2,3')).toBe(6);
  });
});

describe('Part 4 Test', () => {
  it('should return 3', () => {
    expect(stringCalculator.add('//;\n1;2')).toBe(3);
  });
  it('should return 10', () => {
    expect(stringCalculator.add('//$\n1$2$3\n4')).toBe(10);
  });
});

describe('Part 5 Test', () => {
  test('should throw "Negatives not allowed: -1,-2" error', () => {
    expect(() => {
      stringCalculator.add('-1,-2');
    }).toThrowError('Negatives not allowed: -1,-2');
  });
  test('should throw "Negatives not allowed: -2,-2" error', () => {
    expect(() => {
      stringCalculator.add('1,-2,4,-2,10');
    }).toThrowError('Negatives not allowed: -2,-2');
  });
});

describe('Part 6 Test', () => {
  it('should return 2', () => {
    expect(stringCalculator.add('2,1999')).toBe(2);
  });
  it('should return 10', () => {
    expect(stringCalculator.add('4,5,10000,99999,1')).toBe(10);
  });
});

describe('Part 7 Test', () => {
  it('should return 6', () => {
    expect(stringCalculator.add('//[***]\n1***2***3')).toBe(6);
  });
  it('should return 10', () => {
    expect(stringCalculator.add('//$%^\n5$%^2$%^3')).toBe(10);
  });
});
