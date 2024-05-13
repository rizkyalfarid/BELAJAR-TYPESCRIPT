const balikanKata = (kalimat : string) : string => {
  const kata : string[] = kalimat.split(" ");
  const kataDibalik : string = kata.reverse().join(" ");

  return kataDibalik
}

console.log(balikanKata("Saya Belajar Typescript"));
console.log(balikanKata("Halo Semua"));
console.log(balikanKata("Apa Kabar"));