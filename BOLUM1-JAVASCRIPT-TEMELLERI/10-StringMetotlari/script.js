let kursAdi = "Komple Uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase();                 // tüm karakterler küçük olur
sonuc = kursAdi.toUpperCase();                 // tüm karakterler büyük olur
sonuc = kursAdi.length;                        // property 
sonuc = kursAdi[1];                            // dizi içerisindeki tek bir karaktere ulaşmak için index kullanırız
sonuc = kursAdi.slice(0,6);                    // Console'da "Komple" yazar.
sonuc = kursAdi.slice(10);                     // Console'da "ulamalı Web Geliştirme Eğitimi" yazar.
sonuc = kursAdi.slice(-10);                    // Console'da "me Eğitimi" yazar.
sonuc = kursAdi.slice(-10, -5);                // Console'da "me Eğ" yazar.
sonuc = kursAdi.substring(0,6);                // Console'da "Komple" yazar.
sonuc = kursAdi.substring(10);                 // Console'da "ulamalı Web Geliştirme Eğitimi" yazar.
sonuc = kursAdi.replace("Eğitimi","Kursu");
sonuc = kursAdi.trim();                        // Sağdan ve soldan boşlukları siler.
sonuc = kursAdi.trimEnd();                     // Sondaki boşluğu siler.
sonuc = kursAdi.trimStart();                   // Baştaki boşluğu siler.
sonuc = kursAdi.indexOf("Komple");             // Belirtilen string ifadeyi arar ve başlangıç index'ini getirir.
sonuc = kursAdi.split(" ");                    // Console'da ['Komple', 'Uygulamalı', 'Web', 'Geliştirme', 'Eğitimi'] yazar.
sonuc = kursAdi.split(" ")[0];                 // Console'da "Komple" yazar.

console.log(sonuc);
console.log(kursAdi);

// you can search on google with title is "javascript string methods" :)