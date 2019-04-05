const expect = require('chai').expect;
const calc = require('../func/calc.js');

describe('Calc', function () {
  describe('Smoke test', () => {
    it('should exists the calc lib', function () {
      expect(calc).to.exist;
    });

    it('should exists the method sum', function () {
      expect(calc.sum).to.exist;
      expect(calc.sum).to.be.a('function');
    });

    it('should exists the method sub', function () {
      expect(calc.sub).to.exist;
      expect(calc.sub).to.be.a('function');
    });

    it('should exists the method multi', function () {
      expect(calc.multi).to.exist;
      expect(calc.multi).to.be.a('function');
    });

    it('should exists the method divi', function () {
      expect(calc.divi).to.exist;
      expect(calc.divi).to.be.a('function');
    });
  });
});
