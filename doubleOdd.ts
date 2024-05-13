const doubleOddNumbers = (numbers : number[]) : number[] => {
  const result : number[] = [];

  for(let i :number = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
      result.push(numbers[i] * 2);
    }
  }

  return result;
}

console.log(doubleOddNumbers([1,2,3,4,5]));