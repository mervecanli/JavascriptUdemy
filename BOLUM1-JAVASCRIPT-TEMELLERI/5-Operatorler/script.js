let sonuc;
let a=10, b=20, c=30;

// 1- Aritmetik Operatörler
sonuc=a+b;
sonuc=a-b;
sonuc=a*b;
sonuc=a/b;
sonuc=c%b;
sonuc=a++; //önce a sonuc degiskenine atanır sonra a'nın değeri 1 arttırılır
sonuc=++b; //önce b 1 arttırılır sonra b'nin değeri sonuc değişkenine atanır
sonuc=c--; //önce c sonuc degiskenine atanır sonra c'nin değeri 1 azaltılır
sonuc=--c; //önce c'nin değeri 1 azalır sonra c sonuc değişkenine atanır


// 2- Atama Operatörleri
sonuc=a;
sonuc+=a; //sonuc=sonuc+a
sonuc-=a; //sonuc=sonuc-a
sonuc*=a; //sonuc=sonuc*a
sonuc/=a; //sonuc=sonuc/a
sonuc%=a; //sonuc=sonuc%a
sonuc+=(a+b); //sonuc = sonuc+a+b


// 3- Karşılaştırma Operatörleri
sonuc = (a==b);
sonuc = (a!=b);
sonuc = (3==3);
sonuc = (3===3);
sonuc = (3=="3"); //true
sonuc = (3==="3"); //false  
sonuc = (a>b);
sonuc = (a<b);
sonuc = (a>=b);
sonuc = (a<=b);


// 4-Mantıksal Operatörler



console.log(sonuc);
// console.log(a);
// console.log(b);
console.log(c);