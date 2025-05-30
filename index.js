function showReview(){
   document.querySelector(".review-con").classList.add("hover-review");
   document.querySelector(".product-img").classList.add("hover-img");
}
function hideReview(){
   document.querySelector(".review-con").classList.toggle("hover-review");
   document.querySelector(".product-img").classList.toggle("hover-img");
}
var productImg = document.querySelector(".product-img")
productImg.addEventListener("mouseover", showReview )
productImg.addEventListener("mouseout", hideReview )

var sun = document.getElementById("sun-icon")
var moon = document.getElementById ("moon-icon")
var body = document.getElementsByTagName("body")[0]
var introText = document.querySelector("#intro p")
var introParagraph = document.querySelector("#intro h1")

function darkMode(){
    sun.style.display="none";
    moon.style.display="block";
    body.classList.toggle("body-dark")
    introText.style.color("#F0F0F0")
    introParagraph.style.color("#F1F6F9")

}
function lightMode(){
    sun.style.display="block";
    moon.style.display="none";
    body.classList.toggle("body-dark")
    introText.style.color("#F0F0F0")
    introParagraph.style.color("#F1F6F9")

}

function CreateUserName(name, surname){
    this.name = name
    this.surname = surname
}
function submitForm(){

 userName = document.getElementById("name").value;
 userSurname = document.getElementById("surname").value

 var user1 = new CreateUserName(userName, userSurname)
 var greeting = "Hi " + user1.name + " " + user1.surname + ", welcome to our channel"

 document.getElementById("titleform").textContent = greeting
}


var distance = Number(prompt("How far do you live from our store?"))

switch(distance){
case 1:
    console.log("Cost 0$");
    break;
case 2:
    console.log("Cost 5$");
    break;
case 3:
    console.log("Cost 10$");
    break;
}