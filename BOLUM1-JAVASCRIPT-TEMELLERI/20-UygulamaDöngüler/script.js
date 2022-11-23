let sayilar = [1, 5, 7, 15, 3, 25];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for(sayi of sayilar) {
    let sayiKaresi = sayi*sayi;
    // console.log(sayiKaresi);
}

// 2- sayilar listesindeki hangi sayilar 5'in katıdır?
for(sayi of sayilar) {
    if(sayi%5==0) {
        // console.log(sayi);
    }
}

// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let ciftToplam=0;
for(sayi of sayilar) {
    if(sayi%2==0) {
        ciftToplam += sayi;
    }
}
// console.log(ciftToplam);

let urunler = ["iphone 12", "SAMSUNG s22", "iphone 13", "samsung s23"];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
for(index in urunler) {
    // console.log(urunler[index].toUpperCase());
}

// 5- urunler listesinde içinde samsung geçen kaç ürün vardır?
let samsungCount=0;
for(index in urunler){
    if(urunler[index].toLowerCase().includes("samsung")){
        samsungCount += 1;
        // console.log(urunler[index].toLowerCase());
    }
}
// console.log(`Toplam ${samsungCount} üründe "samsung" markası bulunmaktadır.`);

let ogrenciler = [
    {ad: "yiğit", soyad:"bilgi", notlar:[60,70,60]},
    {ad: "ada", soyad:"bilgi", notlar:[80,70,80]},
    {ad: "çınar", soyad:"turan", notlar:[70,70,60]},
];

// 6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let ogrNotOrt = [];
let tmpOgrNotOrtObj={};
ogrenciler.forEach(item=> {
    tmpOgrNotOrtObj={};
    let ogr=`${item.ad} ${item.soyad}`;
    let notToplam=0;
    let notOrt=0;
    item.notlar.forEach(not => 
        notToplam += not 
    );
    notOrt = notToplam / item.notlar.length;

    tmpOgrNotOrtObj.ogr=ogr;
    tmpOgrNotOrtObj.notOrt=notOrt;

    ogrNotOrt.push(tmpOgrNotOrtObj);
});
// console.log(ogrNotOrt);

// 7- tüm öğrencilerin not ortalaması kaçtır?
let tumNotToplam=0;
let notCount=0;
let tumOgrNotOrt=0;
for(ogrenci of ogrenciler) {
    for(not of ogrenci.notlar) {
        tumNotToplam += not;
        notCount += 1
    }
}
tumOgrNotOrt = tumNotToplam / notCount;
console.log(`Tüm öğrencilerin not ortalaması= ${tumOgrNotOrt}`);