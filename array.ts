const arrayAngka : number[] = [];

 let angka : number[] = [1,3,2,7,6,5,9,8,10,4];

 arrayAngka.push(...angka);

 for(let i : number = 0; i < angka.length; i++) {
   for(let j : number = 0; j < angka.length - 1; j++) {
     if(arrayAngka[j] > arrayAngka[j + 1]) {
       let temp : number;
       temp = arrayAngka[j]
       arrayAngka[j] = arrayAngka[j + 1];
       arrayAngka[j + 1] = temp;
     }
   }
 }

console.log(arrayAngka);

let namaMahasiswa : string[] = []; 

let namaNama = ["Rizky", "Nasywah", "Syakina", "Adam", "Bachtiar"];

namaMahasiswa.push(...namaNama);

console.log(namaMahasiswa);

