/*
* Desafio FizzBuzz
* Escreva uma lib que receba um número e:
*
* 1 - Se o número for divisível por 3, no lugar do número escreva 'Fizz'
* 2 - Se o número for divísivel por 5, no lugar do número escreva 'Buzz'
* 3 - Se no número for divísvel por 3 e 5, no lugar do número escreva 'FizzBuzz'
* 4 - Se não for múltiplo de nada, retorna o número
* 5 - Se o número for 0, retorna 0
* */

import { expect } from 'chai';
import { FizzBuzz } from '../func/fizzBuzz';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(FizzBuzz(3)).to.be.equal('Fizz');
    expect(FizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(FizzBuzz(5)).to.be.equal('Buzz');
    expect(FizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5 ', () => {
    expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the number when is not multiple of 3 or 5', () => {
    expect(FizzBuzz(7)).to.be.equal(7);
  });

  it('should return 0 when 0', () => {
    expect(FizzBuzz(0)).to.be.equal(0);
  });
});
