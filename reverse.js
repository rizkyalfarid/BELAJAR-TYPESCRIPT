var balikanKata = function (kalimat) {
    var kata = kalimat.split(" ");
    var kataDibalik = kata.reverse().join(" ");
    return kataDibalik;
};
console.log(balikanKata("Saya Belajar Typescript"));
console.log(balikanKata("Halo Semua"));
console.log(balikanKata("Apa Kabar"));
