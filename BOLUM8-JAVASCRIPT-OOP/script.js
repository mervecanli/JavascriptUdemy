// OOP: Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi Javascript paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c",
//     cevabiKontrolEt: function(cevap) {
//         return this.dogruCevap === cevap
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi .net paket yönetim uygulamasıdır?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b",
//     cevabiKontrolEt: function(cevap) {
//         return this.dogruCevap === cevap
//     }
// }


// console.log(soru.soruMetni);
// console.log(soru.cevabiKontrolEt('c'));

// console.log(soru2.soruMetni);
// console.log(soru2.cevabiKontrolEt('c'));


// Constructor, Sınıf => nesne * 30
// ES5, ES6, ES7


function Soru(soruMetni, cevapSecenekleri, dogruCevap) { // constructor (ES, ES'de sınıf da diyebiliriz.)
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    console.log(this);
}

Soru.prototype.cevabiKontrolEt = function(cevap) {
    return this.dogruCevap === cevap;
}

let soru1 = new Soru("Hangisi Javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b");

let sorular = [
    new Soru("Hangisi Javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
    new Soru("Hangisi Javascript paket yönetim uygulamasıdır?", {a: "Node.js", b: "Typescript", c: "Npm"}, "c"),
    new Soru("Hangisi .net paket yönetim uygulamasıdır?", {a: "Node.js", b: "Nuget", c: "Npm"}, "b"),
]

// console.log(soru1.soruMetni);
// console.log(soru1.cevapSecenekleri);
// console.log(soru1.dogruCevap);

// console.log(soru2.soruMetni);
// console.log(soru2.cevapSecenekleri);
// console.log(soru2.dogruCevap);

// console.log(sorular[0].soruMetni);

// for(let soru of sorular) {
//     console.log(soru.soruMetni);
// }

// console.log(soru1.cevabiKontrolEt("b"));

console.log(soru1.cevabiKontrolEt('c'));