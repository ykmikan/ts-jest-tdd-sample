import { FizzBuzz } from '../src/fizzbuzz';
import assert from 'power-assert';

let fizzbuzz: FizzBuzz;

beforeEach(() => {
  fizzbuzz = new FizzBuzz();
});

describe('三の倍数の場合', () => {
  test('3を渡したら文字列"Fizz"を返す', () => {
    assert.deepEqual(fizzbuzz.convert(3), 'Fizz');
  });
});

describe('五の倍数の場合', () => {
  test('5を渡したら文字列"Buzz"を返す', () => {
    assert.deepEqual(fizzbuzz.convert(5), 'Buzz');
  });
});

describe('その他の場合', () => {
  test('1を渡したら文字列"1"を返す', () => {
    assert.deepEqual(fizzbuzz.convert(1), '1');
  });
});
