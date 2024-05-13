//IMPLEMENTASI TYPE ALIASES
type Judul = string;
type Penulis = string;
type Terbit = number;

class Book {
  title: Judul;
  author: Penulis;
  publishedYear: Terbit;

  constructor(title: string, author: string, publishedYear: number) {
      this.title = title;
      this.author = author;
      this.publishedYear = publishedYear;
  }

  displayInfo(): string {
      return `Judul Buku : ${this.title} | Penulis : ${this.author} | Tahun Terbit : ${this.publishedYear}`;
  }

  isPublishedLastDecade(): boolean {
      const tahunTebaru: number = new Date().getFullYear();
      return tahunTebaru - this.publishedYear <= 10;
  }
}

const sebuahSenja: Book = new Book("Sebuah Senja di Pelabuhan Kecil", "Apa Adanya", 2015);

console.log(sebuahSenja.displayInfo());
console.log(sebuahSenja.isPublishedLastDecade());
