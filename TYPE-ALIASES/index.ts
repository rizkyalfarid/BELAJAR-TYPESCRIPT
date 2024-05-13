// Belajar type aliases

type NamaLengkap = string;
type Umur = number;
type Sekolah = string;
type MataPelajaran = string[];

let namaLengkap : NamaLengkap;
let umur : Umur;
let sekolah : Sekolah;
let mataPelajaran : MataPelajaran;

namaLengkap = "Rizky Al Farid Hafizh";
umur = 19;
sekolah = "SMKN Negeri 2 Cilaku - Cianjur";
mataPelajaran = ["Bahasa Indonesia",
                 "Pendidikan Agama Islam",
                 "Teknologi Layanan Jaringan",
                 "Administrasi Infrastruktur Jaringan",
                 "Bahasa Inggris"
                ]

const message : string = `Nama saya ${namaLengkap}, umur ${umur} tahun. saat ini saya adalah alumni sekolah ${sekolah}, terdiri dari mata pelajaran ${mataPelajaran.join(', ')}`;

console.log(message);

