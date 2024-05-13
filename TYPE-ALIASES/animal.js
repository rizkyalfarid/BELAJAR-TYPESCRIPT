"use strict";
class HewanSepertiKucing {
    constructor(warna, jenis, lahir, beratBadan) {
        this.warna = warna;
        this.jenis = jenis;
        this.lahir = lahir;
        this.beratBadan = beratBadan;
    }
    Berlari() {
        console.log("Whosssssss.....");
    }
}
class Kucing extends HewanSepertiKucing {
    constructor(warna, jenis, lahir, beratBadan) {
        super(warna, jenis, lahir, beratBadan);
    }
    Mengeong() {
        console.log("Meowwwwww");
    }
}
class Harimau extends HewanSepertiKucing {
    constructor(warna, jenis, lahir, beratBadan) {
        super(warna, jenis, lahir, beratBadan);
    }
    Mengaum() {
        console.log("Rawrrrrrrrrrr");
    }
}
const Angora = new Kucing("Black-White", "British Short Hair", 2023, 5);
const HarimauSumatera = new Harimau("Orange", "Harimau Sumatera", 2022, 60);
HarimauSumatera.Mengaum();
Angora.Mengeong();
