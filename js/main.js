

let signUp = document.getElementById("signup");
let signIn = document.getElementById("sign");
let signInPage = document.querySelector(".signinpage");
let signInForm = document.querySelector(".signinform");
let signUpPage = document.querySelector(".signuppage");
let signUpForm = document.querySelector(".signupform");
let container1 = document.querySelector(".container-1");
let container2 = document.querySelector(".container-2");




signUp.addEventListener("click", function() {
    signInPage.classList.remove("none");
    signInForm.classList.add("none");
    signUpPage.classList.add("none");
    signUpForm.classList.remove("none");
    container1.classList.add("bcolor1");
    container2.classList.remove("bcolor1");
});
signIn.addEventListener("click", function() {
    signInPage.classList.add("none");
    signInForm.classList.remove("none");
    signUpForm.classList.add("none");
    signUpPage.classList.remove("none");
    container2.classList.add("bcolor1");
    container1.classList.remove("bcolor1");
});