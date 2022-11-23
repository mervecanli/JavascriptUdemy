// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function writeWord(word, count) {
    if(typeof count !== "number") {
        console.log("Count number olmalıdır");
        return;
    } else {
        if(count<=0) {
            console.log("Count>1 olmalıdır");
        } else {
            for(let i=0; i<count; i++) {
                console.log(word);
            }
        }
    }
}
writeWord("Elma", 5);

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function dikdortgenHesap(kisaKenar, uzunKenar) {
    console.log(`Dikdörtgenin çevresi: ${2*(kisaKenar+uzunKenar)} & alanı: ${kisaKenar*uzunKenar}`);
}
dikdortgenHesap(7,10);

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function getRandomNumber() {
    return (Math.floor(Math.random() * 10)) + 1;
}
function yaziTura() {
    let randomSayi = getRandomNumber();
    if(randomSayi <= 5) {
        console.log("Tura");
    } else {
        console.log("Yazi");
    }
}
yaziTura();

// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolenleriBul(sayi) {
    let tamBolenArr=[];
    for(let i=2; i<sayi; i++) {
        if(sayi % i == 0) {
            tamBolenArr.push(i);
        }
    }
    return tamBolenArr;
}
console.log(tamBolenleriBul(35));

// 5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam() {
    let sum=0;
    for(let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(toplam(2,3,5,8,-9, -15000, 965412));