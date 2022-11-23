let sonuc;

sonuc=10;
sonuc="10";
sonuc=Number("10");

sonuc=parseInt("10.7");
sonuc=parseFloat("10.7");
sonuc=parseInt("10a"); //10
sonuc=parseInt("1a4"); //1
sonuc=parseInt("a23"); //NaN
sonuc=parseFloat("10.7a"); //10.7
sonuc=parseFloat("1s3.9a"); //1
sonuc=parseFloat("a12.5"); //NaN

sonuc = isNaN("10a"); //true
sonuc = isNaN("3a4"); //true
sonuc = isNaN("10");  //false

let sayi = 15.23293231;
sonuc = sayi.toPrecision(5); //15.233  string
sonuc = sayi.toFixed(5); //15.23293 string

sonuc = Math.round(2.4); //2 number
sonuc = Math.round(2.6); //3 number
sonuc = Math.ceil(2.1);  //3 number
sonuc = Math.ceil(2.8)   //3 number
sonuc = Math.floor(2.1); //2 number
sonuc = Math.floor(2.8); //2 number
sonuc = Math.sqrt(25);   //5 number
sonuc = Math.pow(2,3);   //8 number
sonuc = Math.abs(-10);   //10 number
sonuc = Math.min(2,45,6,79,-1,0); //-1 number
sonuc = Math.min(2,45,6,79,-1,"a"); //NaN
sonuc = Math.max(2,45,6,79,-1,0); //79 number
sonuc = Math.max(2,45,6,79,-1,"a"); //NaN
sonuc = Math.floor(Math.random()*10)+1;

console.log(typeof sonuc);
console.log(sonuc);