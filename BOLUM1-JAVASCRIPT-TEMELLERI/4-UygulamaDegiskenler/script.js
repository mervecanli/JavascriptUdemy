/*
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içerisinde saklayınız.
        öğrenci 1: 
            isim : ada bilgi
            doğum tarihi : 2012
            matematik notları : 70, 70, 80

        öğrenci 2: 
            isim : yiğit bilgi
            doğum tarihi : 2010
            matematik notları : 40, 40, 50

    2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerin ders ortalama notunu değişkende saklayınız.
    4- Öğrencilerin 50 geçme notuna göre başarı durumalrını değişkende saklayınız.

*/ 

let ogr1Ad = "Ada";
let ogr1Soyad = "Bilgi";
let ogr1DogumTarihi = "2012";
let ogr1Matematik1=70;
let ogr1Matematik2=70;
let ogr1Matematik3=80;
let ogr1Ort = (ogr1Matematik1+ogr1Matematik2+ogr1Matematik3)/3;
console.log(ogr1Ort);
console.log(typeof ogr1Ort);
console.log(parseInt(ogr1Ort));
console.log(ogr1Ort>=50);



let ogr2Ad="Yiğit";
let ogr2Soyad="Bilgi";
let ogr2DogumTarihi = "2010";
let ogr2Matematik1=40;
let ogr2Matematik2=40;
let ogr2Matematik3=50;
let ogr2Ort=(ogr2Matematik1+ogr2Matematik2+ogr2Matematik3)/3;
console.log(ogr2Ort);
console.log(typeof ogr2Ort);
console.log(parseFloat(ogr2Ort));
console.log(ogr2Ort>=50);


let suankiYil = new Date().getFullYear();

// let ogr1Yas = 2022-ogr1DogumTarihi;
// let ogr1Yas = 2022-parseInt(ogr1DogumTarihi);
let ogr1Yas = suankiYil-Number(ogr1DogumTarihi);
let ogr2Yas = suankiYil-parseInt(ogr2DogumTarihi);

console.log(ogr1Yas);
console.log(ogr2Yas);






