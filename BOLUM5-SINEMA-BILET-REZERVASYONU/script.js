const container = document.querySelector(".container");
const count = document.getElementById("count");
const movie = document.getElementById("movie");
const amount = document.getElementById("amount");
const text = document.getElementById("text");
const seats = container.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();


container.addEventListener("click", function(e) {
    if(e.target.classList.contains('seat') && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculateTotal();
    }
});

movie.addEventListener('change', function(e){
    calculateTotal();
})


function calculateTotal() {
    const selectedSeats = container.querySelectorAll(".seat.selected");

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(selectedSeat) {
        selectedSeatsArr.push(selectedSeat);
    });
    seats.forEach(function(seat) {
        seatsArr.push(seat);
    });
    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    })

    let selectedSeatCount = selectedSeats.length;
    count.innerText = selectedSeatCount;
    amount.innerText = movie.value * selectedSeatCount;

    saveToLocalStorage(selectedSeatIndexs);
}

function saveToLocalStorage(indexs) {
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", JSON.stringify(movie.selectedIndex))
}

function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    const selectedMovieIndex = JSON.parse(localStorage.getItem("selectedMovieIndex"));

    if(selectedMovieIndex !== null) {
        movie.selectedIndex = selectedMovieIndex; 
    }

    if(selectedSeats !== null && selectedSeats.length>0) {
        seats.forEach(function(seat, index) {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add("selected");
            }
        })
    }
}