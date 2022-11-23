// 1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
console.log(meyveler);

// 2- Dizi kaç elemanlıdır?
let len = meyveler.length;
console.log(len);

// 3- Dizinin ilk ve son elemanı nedir?
let firstMember = meyveler[0];
let lastMember = meyveler[len-1];
console.log(firstMember);
console.log(lastMember);

// 4- Elma dizinin bir elemanı mıdır?
let isMember = meyveler.includes("Elma");
console.log(isMember);

// 5- Kiraz meyvesini listenin sonuna ekleyiniz.
meyveler.push("Kiraz");
// meyveler[len] = "Kiraz";
console.log(meyveler);

// 6- Dizinin son 2 elemanını siliniz.
// meyveler.pop();
// meyveler.pop();
// console.log(meyveler);
meyveler.splice(meyveler.length-2, 2);
console.log(meyveler);

// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız.
    /*
        Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012   (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)
    */

let ogrenciler = [
    {ad:"Yiğit", soyad:"Bilgi", dogumYili:2010, notlar:[70,60,80]},
    {ad:"Ada",   soyad:"Bilgi", dogumYili:2012, notlar:[80,80,90]},
    {ad:"Ahmet", soyad:"Turan", dogumYili:2009, notlar:[60,60,70]},
];
ogrenciler.forEach(calculateAge);
function calculateAge(value) {
    let date = new Date().getFullYear();
    console.log(`${value.ad} ${value.soyad} ${date-value.dogumYili} yaşındadır.`);
}