let ad="Sadık"
let soyad="Turan";
let yas=39;
let sehir="Kocaeli";

// let mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum. ' + "Emekliliğe " + (65-yas) + ' yılım kaldı.';

//backtick
let mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65-yas} yılım kaldı.`;

//ternary operators
let emeklilik = (65-yas>0) ? `Emekliliğe ${65-yas} yıl kaldı.` : "Zaten emekli oldunuz";


console.log(mesaj);
console.log(emeklilik);







