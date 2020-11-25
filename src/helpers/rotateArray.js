
// shifts array to the left n times
export const rotateArray = (array, amount) => {
  for (let i = 0; i < amount; i++) {
    console.log(array)
    array.push(array.shift());
  }

  return array;
}
