class HewanSepertiKucing {
  warna : string;
  jenis : string;
  lahir : number;
  beratBadan : number;

  constructor(warna : string, jenis : string, lahir : number, beratBadan : number) {
    this.warna = warna;
    this.jenis = jenis;
    this.lahir = lahir;
    this. beratBadan = beratBadan;
  }

  Berlari() : void {
    console.log("Whosssssss.....");
  }
}

class Kucing extends HewanSepertiKucing {
  constructor (warna : string, jenis : string, lahir : number, beratBadan : number) {
    super(warna, jenis, lahir, beratBadan);
  }

  Mengeong() : void {
    console.log("Meowwwwww");
  }
}

class Harimau extends HewanSepertiKucing {
  constructor(warna : string, jenis : string, lahir : number, beratBadan : number) {
    super(warna, jenis, lahir, beratBadan);
  }

  Mengaum() : void {
    console.log("Rawrrrrrrrrrr")
  }
}

const Angora : Kucing = new Kucing("Black-White", "British Short Hair", 2023, 5);
const HarimauSumatera : Harimau = new Harimau("Orange", "Harimau Sumatera", 2022, 60);

HarimauSumatera.Mengaum()
Angora.Mengeong()