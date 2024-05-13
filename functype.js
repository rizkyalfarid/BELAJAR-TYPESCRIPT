"use strict";
// tanpa return (tipe void)
// const cetakNama = (nama : string) => {
//   console.log("Hello, " + nama);
// }
// cetakNama("Rizky Al Farid");
// const luasPersegiPanjang = (panjang : number, lebar : number) => {
//   const luas = panjang * lebar;
//   return luas;
// }
// console.log(luasPersegiPanjang(7,4));
const cekGanjilGenap = (angka) => {
    return angka % 2 === 0 ? "Genap" : "Ganjil";
};
console.log(cekGanjilGenap(7));
