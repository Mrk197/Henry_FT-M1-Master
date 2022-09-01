const { checkSeatStatus, getRowNumber, book } = require('../homework');

describe('checkSeatStatus', () => {
    it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function');
    });

    it('should throw a TypeError if first parameter is not a string', () => {
    expect(() => checkSeatStatus(4)).toThrow(new TypeError('First parameter is not a string'));
    });

    it('should throw a TypeError if second parameter is not a number', () => {
    expect(() => checkSeatStatus('A','4')).toThrow(new TypeError('Second parameter is not a number'));
    });

    it('should return true if the given seat defined by row and column is booked', () => {
    expect(checkSeatStatus('A', 1)).toBe(true);
    });
    
    it('should return false if the given seat defined by row and column is not booked', () => {
    expect(checkSeatStatus('E', 3)).toBe(false);
    });
});

describe('getRowNumber', () => {
    it('should return 1 if the letter given is an A', () => {
    expect(getRowNumber('A')).toBe(0);
    });
    
    it('should return 3 if the letter given is a C', () => {
    expect(getRowNumber('C')).toBe(2);
    });
});

describe('book', () => {
    it(' should return "Seat in XX successfully booked" if the given seat is not booked', () => {
        expect(book('B',2)).toBe('Seat in B2 successfully booked');
    });
    it(' should return "Seat in XX is not available" if the given seat is booked', () => {
        expect(book('C',1)).toBe('Seat in C1 is not available');
    });
});