/*
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kvd dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi : 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler:
        ürün id: 5
        ürün başlığı: Iphone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id:6
        ürün başlığı: Iphone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 1

    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/

let siparisler = {
    siparisId:101,
    siparisTarihi:"30.12.2022",
    odemeSekli:"kredi kartı",
    kargoAdresi: {
        mahalle: "Yahya kaptan mah.",
        ilce: "İzmit",
        sehir: "Kocaeli"
    },
    satinAlinanUrunler:[
        {urunId:5, urunBasligi:"Iphone 13 Pro", urunUrl:"http://abc.com/iphone-13-pro", urunFiyat:22000},
        {urunId:6, urunBasligi:"Iphone 13 Pro Max", urunUrl:"http://abc.com/iphone-13-pro-max", urunFiyat:25000}
    ],
    musteri:{
        musteriId:1
    },
    satici: {
        firmaId:34,
        firmaAdi:"Apple Türkiye"
    }
};

let tmpArrUrunUcretHesaplaKdvDahil=[];
let urunFiyatlariKdvDahil={};
siparisler.satinAlinanUrunler.forEach(urunUcretHesaplaKdvDahil);


function urunUcretHesaplaKdvDahil(value) {
    urunFiyatlariKdvDahil={};
    urunFiyatlariKdvDahil.urunAdi=value.urunBasligi;
    urunFiyatlariKdvDahil.kdvDahilFiyat = `${value.urunFiyat + (value.urunFiyat*(0.18))} TL`;
    tmpArrUrunUcretHesaplaKdvDahil.push(urunFiyatlariKdvDahil);
}
console.log(tmpArrUrunUcretHesaplaKdvDahil);


let kdvDahilToplamOdenenTutar=0;
tmpArrUrunUcretHesaplaKdvDahil.forEach(item => {
    kdvDahilToplamOdenenTutar += Number(item.kdvDahilFiyat.replace(" TL",""));
});

console.log(`KDV dahil toplam ödenecek tutar = ${kdvDahilToplamOdenenTutar} TL'dir.`);