let toplam=0;
let toplamSayilar=0;

for(let i=1; i<=10; i++) {
    toplam += i;
}
// console.log(toplam);


let sayilar=[1,4,5,8,4,3];

// for(let i=0; i<sayilar.length; i++) {
//     toplamSayilar += sayilar[i];
// }

// for(let index in sayilar) {
//     toplamSayilar += sayilar[index];
// }

// for(let sayi of sayilar) {
//     toplamSayilar += sayi;
// }

sayilar.forEach(item => {
    toplamSayilar += item;
});

// console.log(toplamSayilar);


let user = {
    name:"Sadık Turan",
    username:"sadikturan",
    password:"12345",
    email:"info@sadikturan.com"
};

for(let key in user) {
    console.log(key);
    console.log(user[key]);
}