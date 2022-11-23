let kullaniciA = {
    "isim":"Sadik",
    "soyisim" : "Turan",
    "yas" : 38,
    "adres" : {
        "sehir" : "kocaeli",
        "ilce" : "izmit"
    },
    "hobiler" : [
        "sinema", "spor"
    ]
};  
let kullaniciB = {
    "isim":"Çınar",
    "soyisim" : "Turan",
    "yas" : 5,
    "adres" : {
        "sehir" : "kocaeli",
        "ilce" : "izmit"
    },
    "hobiler" : [
        "sinema", "spor"
    ]
};  

//dizi elemenlarına index numarası ile ulaşılır.

let sonuc;
// sonuc = kullaniciA[0]; //undefined
sonuc = kullaniciA.isim; // Sadik
sonuc = kullaniciA["isim"]; // Sadik
sonuc = kullaniciA.adres.sehir;
sonuc = kullaniciA["adres"]["ilce"];
sonuc = kullaniciA.hobiler[1];

let kullanicilar = [
    kullaniciA,
    kullaniciB
];
sonuc = kullanicilar[1].isim;

let urunler = [
    {
        "urun_adi" : "samsung s22",
        "urun_fiyat" : 13000
    },
    {
        "urun_adi" : "samsung s23",
        "urun_fiyat" : 15000
    }
];
sonuc = urunler[0].urun_adi;

console.log(sonuc);