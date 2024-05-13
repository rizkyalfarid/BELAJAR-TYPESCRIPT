"use strict";
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }
    displayInfo() {
        return `Judul Buku : ${this.title} | Penulis : ${this.author} | Tahun Terbit : ${this.publishedYear}`;
    }
    isPublishedLastDecade() {
        const tahunTebaru = new Date().getFullYear();
        return tahunTebaru - this.publishedYear <= 10;
    }
}
const sebuahSenja = new Book("Sebuah Senja di Pelabuhan Kecil", "Apa Adanya", 2015);
console.log(sebuahSenja.displayInfo());
console.log(sebuahSenja.isPublishedLastDecade());
