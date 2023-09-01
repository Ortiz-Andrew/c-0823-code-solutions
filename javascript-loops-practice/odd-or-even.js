/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddEven = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEven.push('even');
    } else {
      oddEven.push('odd');
    }
  }
  return oddEven;
}

// const numbers = [100, 121, 7];
// const oddEven = oddOrEven(numbers);
// console.log(oddOrEven(oddEven));
