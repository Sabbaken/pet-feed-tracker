import { rotateArray } from './rotateArray';

it('rotates array', () => {
  const initialArray = ['1', '2', '3', '4', '5'];
  const rotatedArray = rotateArray(initialArray, 2);
  expect(rotatedArray).toEqual(['3', '4', '5', '1', '2']);
});
