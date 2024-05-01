const namaSaya : string = "Rizky Al Farid Hafizh";
const umurSaya : number = 19;
const isKuliah : boolean = true;
const semester : number = 2;

const pesanKeLog = `Halo, Nama saya ${namaSaya}, umur saya ${umurSaya}, saat ini ${isKuliah ? "saya berkuliah di Unikom" : "Saya bekerja"}, ${isKuliah ? `Saat ini sudah semester ${semester}` : ""}`;

console.log(pesanKeLog);