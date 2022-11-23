var isim = "Ahmet"; // global scope
const adres = "İzmir";

// adres="Antalya"; // TypeError: Assignment to constant variable.
console.log(adres);

function yazdir() {
    var isim="Ayşe";
    var yas=20;
    console.log("function scope: ", isim, yas);
}

if(true) {
    let cinsiyet ="Kadın";
    var isim="Zeynep";
    // const isim="Zeynep";

    console.log(isim, cinsiyet);
    // if, for gibi bloklar global scope'dur. Ayrı bir kapsam oluşturmaz.
}

// console.log(cinsiyet); // Uncaught ReferenceError: cinsiyet is not defined
// cinsiyet let ile tanımlandığı için blovk içerisinde ulaşılabilinir.
console.log(isim);
yazdir();

// console.log(isim);
// console.log(yas); throw an error => yas is not defined


// FONKSİYONLAR KENDİ SCOPE ALANLARINI OLUŞTURURLAR.
// BLOCK İÇERİSİNDE YENİ BİR SCOPE OLUŞMAZ. 
// var => yeni bir scope alanı oluşmaz.
// let veya const => yeni bir scope oluşur

// aslında bütün çabamız fonksiyon gibi davranan bloklar oluşturmak. Bunu da let veya const ile yapabiliyoruz. 

// const: bir const değişken tanımlandığında aslında bir sabit değişken tanımlanmış olunur. 
// uygulama boyunca değiştirilmemesini garanti altına alınması istenilen değişkenleri const ile tanımlayabiliriz.


let deneme="aa"
function change(){
    deneme="bb"
    console.log(deneme);
}
console.log(deneme);
change();
console.log(deneme);
