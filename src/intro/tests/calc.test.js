import { expect } from 'chai';
import { sum, sub, multi, div } from '../func/calc';

describe('Calc', () => {
  describe('Smoke test', () => {
    it('should exists the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists the method multi', () => {
      expect(multi).to.exist;
      expect(multi).to.be.a('function');
    });

    it('should exists the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 6 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Multi', () => {
    it('should return 6 when `multi(2,3)`', () => {
      expect(multi(2, 3)).to.be.equal(6);
    });
  });

  describe('Div', () => {
    it('should return 3 when `multi(6,2)`', () => {
      expect(div(6, 2)).to.be.equal(3);
    });

    it('should return `Não é possível dividir por zero` when try to divide by zero', () => {
      expect(div(6, 0)).to.be.equal('Não é possível dividir por zero');
    });
  });
});
