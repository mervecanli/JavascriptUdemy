var models = [
    { name: 'Bmw 418d', image:"img/bmw.jpg",   link: "http://www.arabalar.com.tr/bmw/1-serisi" },
    { name: 'Honda',    image:"img/honda.jpg", link: "http://www.arabalar.com.tr/bmw/1-serisi" },
    { name: 'Mazda',    image:"img/mazda.jpg", link: "http://www.arabalar.com.tr/bmw/1-serisi" },
    { name: 'Skoda',    image:"img/skoda.jpg", link: "http://www.arabalar.com.tr/bmw/1-serisi" },
    { name: 'Volvo',    image:"img/volvo.jpg", link: "http://www.arabalar.com.tr/bmw/1-serisi" }
];


var index = 0;
var slaytCount = models.length;
var settings = {
    duration: '2000',
    random:true
};
var interval;

var leftClick = document.querySelector(".fa-circle-arrow-left");
var rightClick = document.querySelector(".fa-circle-arrow-right");
var arrows = document.querySelectorAll(".arrow");

init(settings);

function init(settings) {
    var prev;
    interval = setInterval(function() {
        if(settings.random) { 
            do {
                index = Math.floor(Math.random()*slaytCount);
            } while(index == prev);
            prev=index;
            console.log(index);
        } else {
            if(index+1 > slaytCount) {
                index = 0;
            }
            console.log(index);
            index++;
        }
        displaySlider(index);
    }, settings.duration);
};

leftClick.addEventListener("click", function() {
    index = index - 1;
    displaySlider(index);
});

rightClick.addEventListener("click", function() {
    index = index + 1;
    displaySlider(index);
});

function displaySlider(i) {
    index=i;
    if(i<0){
        index = slaytCount-1;
    }
    if(i >= slaytCount) {
        index=0;
    }
   
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-link").setAttribute("href", models[index].link);
};

arrows.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);
    });
});

arrows.forEach(function(item){
    item.addEventListener("mouseleave", function() {
        init(settings);
    });
});