import { evaluateRPN } from "../../utils/util";

describe('evaluateRPN', () => {
    it('should evaluate simple RPN expressions', () => {
      expect(evaluateRPN('1 2 +')).toEqual(3);
      expect(evaluateRPN('3 4 -')).toEqual(-1);
      expect(evaluateRPN('5 6 *')).toEqual(30);
      expect(evaluateRPN('10 2 /')).toEqual(5);
    });
  
    it('should handle complex expressions', () => {
      expect(evaluateRPN('2 3 + 4 *')).toEqual(20);
      expect(evaluateRPN('5 1 2 + 4 * + 3 -')).toEqual(14);
    });

    it('Should handle a multiple prompt input', () => {
        expect(evaluateRPN('1')).toEqual(1);
        expect(evaluateRPN('2')).toEqual(2);
        expect(evaluateRPN('+')).toEqual(3);
        expect(evaluateRPN('4 +')).toEqual(7);
    });
  
    it('should throw an error for invalid input', () => {
      expect(() => evaluateRPN('1 2 ++')).toThrow('Invalid operation: "++"');
      expect(() => evaluateRPN('3 a +')).toThrow('Invalid operation: "a"');
    });
  });
