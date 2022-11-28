const color = ["green", "red", "rgba(133,122,200)", "#f15025"];
 
document.getElementById("btn").addEventListener("click", function () {
const randomNumber = getRandomNumber();


document.body.style.backgroundColor = color[randomNumber];
document.querySelector(".color").textContent = color[randomNumber];

});
function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
  }
  