let url = "https://www.sadikturan.com/"
let kursAdi = "Komple Web Geliştirme Kursu";


// 1- url kaç karakterlidir?
let urlCarakterCount = url.length;
console.log(urlCarakterCount);

// 2- kursAdi kaç kelimeden oluşmaktadır?
let kursAdiWordList = kursAdi.split(" ");
let kursAdiWordCount = kursAdiWordList.length;
console.log(kursAdiWordCount);

// 3- url https ile mi başlıyor?
let isStartHttps = url.startsWith("https");
console.log(isStartHttps);

// 4- kursAdi içerisinde Eğitimi kelimesi var mı?
let includesEgitimi =  kursAdiWordList.includes("Eğitimi");
console.log(includesEgitimi);

// 5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
//    https://www.sadikturan.com/komple-web-gelistirme-kursu

let urlAddress = url.concat(kursAdiWordList[0].toLowerCase() + "-" +
                            kursAdiWordList[1].toLowerCase() + "-" +
                            kursAdiWordList[2].replace("ş","s").toLowerCase() + "-" +
                            kursAdiWordList[3].toLowerCase()
);
console.log(urlAddress);