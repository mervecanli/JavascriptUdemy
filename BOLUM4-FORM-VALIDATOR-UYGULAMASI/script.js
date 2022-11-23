const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback"
}
function success(input) {
    input.className="form-control is-valid"
}

const validateEmail = (input) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)) {
        success(input);
    } else {
        error(input, "Email address is not acceptable.");
    }
};

const validateRequired = (inputs) => {
    inputs.forEach(function(input) {
        if(input.value === "") {
            error(input, `${input.id} is required.`);
        } else {
            success(input);
        }
    });
}

function validateLength(input, min, max) {
    if(input.value.length < min) {
        error(input, `${input.id}'s length must be longer than ${min}`)
    } else if(input.value.length > max) {
        error(input, `${input.id}'s length must be least than ${max}`)
    } else {
        success(input);
    }
}

const validatePasswordsMatch = (password, repassword) => {
    if(password.value !== repassword.value) {
        error(repassword, "Passwords do not match.");
    }
}

function validatePhoneNumber(input) {
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)) {
        error(input, "Phone must have 10 characters");
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    validateRequired([username, email, password, repassword, phone]);
    validateEmail(email);
    validateLength(username, 7, 15);
    validateLength(password, 7, 12);
    validatePasswordsMatch(password, repassword);
    validatePhoneNumber(phone);
});