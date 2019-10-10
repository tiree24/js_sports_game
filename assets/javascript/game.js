let buttonElement = document.querySelector("#teamone-shoot")
console.log(buttonElement)
let teamOneShots = document.querySelector("#teamone-numshots")
let teamOneGoals = document.querySelector("#teamone-numhits")
let teamTwoShots = document.querySelector("#teamtwo-numshots")
let teamTwoGoals = document.querySelector("#teamtwo-numhits")

buttonElement.addEventListener("click", function () {

    teamOneShots.innerHTML++
    if (Math.random() > 0.5) {

        teamOneGoals.innerHTML++
    }
})





let buttonElement2 = document.querySelector("#teamtwo-shoot")
console.log(buttonElement2)

buttonElement2.addEventListener("click", function () {

    teamTwoShots.innerHTML++
    if (Math.random() > 0.5) {

        teamTwoGoals.innerHTML++
    }
})


let buttonElementReset = document.querySelector("#reset")
console.log(buttonElementReset)

buttonElementReset.addEventListener("click", function () {
    let reset = document.querySelector("#num-resets")
    reset.innerHTML++
 teamOneGoals.innerHTML = 0
 teamOneShots.innerHTML = 0
 teamTwoGoals.innerHTML = 0
 teamTwoShots.innerHTML = 0

})












// document.getElementById("myBtn").addEventListener("click", function(){
//     document.getElementById("demo").innerHTML = "Hello World";
//   });
