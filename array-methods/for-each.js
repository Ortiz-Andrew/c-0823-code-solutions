const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];
values.forEach((number) => console.log(number));
values.forEach((number, index, array) => {
  const reverseIndex = array.length - 1 - index;
  console.log(array[reverseIndex]);
});
