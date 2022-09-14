const rateContainer = document.querySelector(".rate")
const thanks = document.querySelector(".thank-you")
const submitButton = document.getElementById("submit-rate")
const rates = document.querySelectorAll(".btn1")
//const rating = document.getElementsById("rating")
const span = document.querySelector("span")


function displayThankyou(){
    thanks.classList.remove("hide")
    rateContainer.style.display = "none"

}

rates.forEach((rate) => {
    rate.addEventListener("click", () =>{
        span.innerHTML = rate.innerHTML
    })
})






