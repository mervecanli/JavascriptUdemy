/*
    Değişken Tanımlama: Değişken programlama dilinin temelini oluşturur. Her programlama dilinde mantık tamamen aynıdır.
                        Değişken program çalışırken ihtiyacımız olan verilerin geçici olarak saklandığı bir depo olarak adlandırılabilir.
                        Değişken tanımlandığında bu değişken bilgisayarın ram'inde yani geçici belleğinde saklanır.

                        Bilgilere takma isim vererek geçici bir depo içerisinde saklama işlemine değişken tanımlama denir.
                        -Değişken isimleri arasında boşluk olmaz. (Unexpected identifier)
                        -Türkçe karakter kullanmamalıyız.
                        -"_" kullanılabilir ancak "-" kullanılmaz.
                        -Değişken isminin başında sayısal değer olmaz ancak sonuna eklenebilir.
                        -Değişken isimleri tanımlanırken küçük harfle başlanılmalıdır, büyük harfli olanları sınıf tanımlama için kullanırız.

*/

var maasAli = 7000;
var maasCan = 6000;
var zam = 0.35;

console.log(maasAli+(maasAli*zam)); //maaş ali
console.log(maasCan+(maasCan*zam)); //maaş can