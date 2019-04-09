/*
* Desafio FizzBuzz
* Escreva uma lib que receba um número e:
*
* 1 - Se o número for divisível por 3, no lugar do número escreva 'Fizz'
* 2 - Se o número for divísivel por 5, no lugar do número escreva 'Buzz'
* 3 - Se no número for divísvel por 3 e 5, no lugar do número escreva 'FizzBuzz'
* 4 - Se não for múltiplo de nada, retorna o número
*
* */

import { expect } from 'chai';
import { fizzbuzz } from '../func/fizzbuzz';

describe('Main', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzbuzz(3)).to.be.equal('Fizz');
    expect(fizzbuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzbuzz(5)).to.be.equal('Buzz');
    expect(fizzbuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of 3 and 5 ', () => {
    expect(fizzbuzz(15)).to.be.equal('FizzBuzz');
    expect(fizzbuzz(30)).to.be.equal('FizzBuzz');
  });

  it('should return the number when is not multiple of 3 or 5', () => {
    expect(fizzbuzz(7)).to.be.equal(7)
  })
});
