$(()=>{

const spaceBattle = () => {
    window.open('https://reliable-granita-1b6bf9.netlify.app', "_blank");
}
const RockPaperScissors = () => {
    window.open('https://shiny-haupia-56f81e.netlify.app', "_blank");
}


// ============================================    Event Listeners   =============================================

    $('#1').on('click', spaceBattle);
    $('#2').on('click', RockPaperScissors);

});


// dont seem to work while embedded in my main html page
// mouseover space battle > click to play
// var btn = document.querySelector(".space battle");

// btn.addEventListener("mouseover", function() {
//     this.textContent = "Click to Play!";
// })
// btn.addEventListener("mouseout", function() {
//     this.textContent = "Space Battle";
// })

// // mouseover RPS > click to play
// var btn1 = document.querySelector(".Rock,Paper,Scissors");

// btn1.addEventListener("mouseover", function() {
//     this.textContent = "Click to Play!";
// })
// btn1.addEventListener("mouseout", function() {
//     this.textContent = "Rock,Paper,Scissors";
// })