// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi=16;
if(sayi>10 && sayi<50) {
    console.log("Girilen sayi 10'dan büyük, 50'den küçüktür.");
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

let sayi2=-9;
if(sayi2>0 ){
    if(sayi2%2==1)
        console.log("Girilen sayi pozitif tek sayıdır.");
    else 
        console.log("Girilen sayi pozitif tek sayı değildir.");
}else  {
    console.log("Girilen sayi pozitif değildir.");
}

// 3-  x, y, z sayılarının büyüklük karşılaştırmasını yapınız. (else if'i araştırınız.)

let x=10, y=8, z=-9;
if(x>y && x>z) {
    console.log("x en büyük");
} else if(y>x && y>z) {
    console.log("y en büyük");
} else if(z>x && z>y) {
    console.log("z  en büyük");
} else {
    console.log("sayılar eşit");
}

// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
    // b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.

let vize1=15;
let vize2=85;
let final=96;
let ort =  (((vize1+vize2)/2)*0.4) + (final*0.6);
if(ort>=50 && final>=50) {
    console.log("Geçti");
} else if(final>=70) {
    console.log("Geçti");
}
else {
    console.log("Kaldı");
}