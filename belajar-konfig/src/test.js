"use strict";
// INI ADALAH KONSEP ENCLOSURE
function greetings(waktu) {
    return (nama) => {
        return `Halo, Selamat ${waktu} ${nama}`;
    };
}
const pagi = greetings('Pagi');
const malam = greetings("Malam");
console.log(pagi("Rizky Al Farid Hafizh"));
const angkaAcak = [1, 4, 3, 2, 5, 6, 9, 8, 10, 7];
const SortingBalon = (arrayAngka) => {
    const n = arrayAngka.length;
    for (let i = 0; i < arrayAngka.length; i = i + 1) {
        for (let j = 0; j < arrayAngka.length - 1; j++) {
            if (arrayAngka[j] > arrayAngka[j + 1]) {
                let temp;
                temp = arrayAngka[j];
                arrayAngka[j] = arrayAngka[j + 1];
                arrayAngka[j + 1] = temp;
            }
        }
    }
    return arrayAngka;
};
console.log(SortingBalon(angkaAcak));
