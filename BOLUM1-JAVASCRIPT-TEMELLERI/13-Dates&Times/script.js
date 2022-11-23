let simdi = new Date(); //şimdiki tarih-saat bilgisi

sonuc = simdi;

//GET Methods
sonuc = simdi.getDate();      // ayın kaçı?
sonuc = simdi.getDay();       // hangi gün? (0:pazar, 6:cumartesi)
sonuc = simdi.getFullYear();  // hangi yıldayız?
sonuc = simdi.getHours();     // saat kaç?
sonuc = simdi.getTime();      // şu anki saat bilgisi ms türünden verilir

//SET Methods
simdi.setFullYear(2025);
simdi.setMonth(7);            // 0:Ocak
simdi.setDate(30);
sonuc=simdi;

let dogumTarihi = new Date(1990, 5, 15); // 0:ocak
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000; // saniye
let dakika = saniye / 60;       // dakika
let saat = dakika / 60;         // saat
let gun = saat / 24;            // gün
let yil = gun / 365;            // yil
sonuc=yil;

console.log(sonuc);
console.log(typeof sonuc);

// you can search on google with title is "javascript date" :)