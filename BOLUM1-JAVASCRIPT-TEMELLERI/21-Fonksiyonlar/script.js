/*
    Belli bir amaç için tekrar tekrar yapacak olduğumuz işlemleri fonksiyona yaptırabiliriz.
    Class'tan türetilmiş nesne üzerinden fonksiyon çağrılıyorsa  =>  method 
    Fonksiyon herhangi bir class'a bağlı olmadan tanımlanıyorsa  => fonksiyon
*/


function selamlama() {
    console.log("merhaba");
}
selamlama();
selamlama();

function selamlama2(msg) {
    console.log(msg);
}
selamlama2("iyi günler");
selamlama2("selam");
selamlama2(); //undefined


function yasHesapla(dogumYili) {
    // console.log(new Date().getFullYear() - dogumYili);
    return new Date().getFullYear() - dogumYili;
}

// yasHesapla(1985);
console.log(yasHesapla(2000));
let yasAyse = yasHesapla(1997);
console.log(yasAyse); 


function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalanSene = 65-yas;
    if(kalanSene>0) {
        console.log(`${isim} emekli olmanıza ${kalanSene} sene kaldı.`);
    } else {
        console.log("Zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");