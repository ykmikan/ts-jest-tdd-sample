import { helloWorld } from '../src';

test('basic', () => {
  expect(helloWorld('John')).toBe('Hello John');
});
