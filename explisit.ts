let arrayAcak: number[] = [1,4,3,5,2,6,7,9,8,10,15,11,13,12];

for(let i : number = 0; i < arrayAcak.length; i++) {
  for(let j : number = 0; j < arrayAcak.length - 1; j++) {
    if(arrayAcak[j] > arrayAcak[j + 1]) {
      let temp : number = arrayAcak[j];
      arrayAcak[j] = arrayAcak[j + 1];
      arrayAcak[j + 1] = temp;
    }
  }
}

console.log(arrayAcak)