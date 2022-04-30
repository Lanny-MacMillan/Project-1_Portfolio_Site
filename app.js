$(()=>{
let backgroundArray = []
//Storing these urls didnt seem to work, but pushing them into the array did
backgroundArray.push('https://i.imgur.com/VOgGD0x.jpg')
backgroundArray.push('https://i.imgur.com/AzkWLJQ.jpg')
backgroundArray.push('https://i.imgur.com/lAMZ483.jpg')
backgroundArray.push('https://i.imgur.com/4Q5mMRb.png')
backgroundArray.push('https://i.imgur.com/xDL2RNb.jpg')
    
randomBackground = () => {
    var randomCount = (Math.floor(Math.random() * backgroundArray.length));
    const url = backgroundArray[randomCount]
    $("body").css("background-image", "url(" + url + ")");
    console.log(url)
}
// randomBackground()
const home = () => {
window.location.href = 'index.html';
}
const about = () => {
    window.location.href = 'about.html';
}
const resume = () => {
    window.location.href = 'resume.html';
}
const projects = () => {
    window.location.href = 'projects.html';
}



// mouseover projects link and change text to interactive back to projects
var btn = document.querySelector(".projects");
btn.addEventListener("mouseover", function() {
    this.textContent = "Interactive!";
})
btn.addEventListener("mouseout", function() {
    this.textContent = "Projects";
})

// ============================================    Event Listeners   =============================================

    $('#1').on('click', home);
    $('#1').on('click', randomBackground());
    $('#2').on('click', about);
    $('#3').on('click', resume);
    $('#4').on('click', projects);


});















//============================================   THE GRAVEYARD ==================================================
// const randomBackground = () => {
//     let num = Math.floor(Math.random() * background.length)
//     if (num === 1) {
//        console.log(background[0])
//     } else if (num === 2) {
//         console.log(background[1])
//     } else if (num === 3) {
//         console.log(background[2])
//     } else
//         console.log(background[3])
// }







{/* <a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="resume.html">Resume</a>
<a href="projects.html">Projects</a> */}

//wont clear page on multiple clicks
// const about = () => {
//     $('#middle').remove()
//     $('<h5>').remove()
//     $('</br>').remove()
//     const $br = $('</br>')

//     const $h5a = $('<h5>').text('Ive been working in the Electrical industry for 25 years. It started with an apprenticeship at a small company when I was 15 and that brought me to getting my electrical license 5 years later. With that license I became a project foreman/lead electrician running projects valued from $50k to $3 million with a crew of up to 15 people.')
//     const $h5b = $('<h5>').text('After a few years of successful project completions I was promoted to Project Manager overseeing the same projects I had been running. This was a good fit but I excelled at problem solving and troubleshooting electrical issues. This led me to start my own electrical service company, I really enjoyed the business side of it. I had my own company for a few years and we did so well that the company I left bought me out and had me run a service division within that company. We grew and expanded the division, hired more electricians and bought more service vehicles.')
//     const $h5c = $('<h5>').text("But over the years I lost alot of the passion and fun I had doing Electrical, so I started to revisit programming which I enjoyed alot in High School. Im currently at General Assembly's Software Engineering Immersive Program learning to be a software developer, looking forward to a new future.")
//     $('#lower').append($br)
//     $('#lower').append($h5a)
//     $('#lower').append($br)
//     $('#lower').append($h5b)
//     $('#lower').append($br)
//     $('#lower').append($h5c)
//     $('#lower').append($br)

// }


//========================= Change background image based on cookie visits ===================================


// var name = "visitCount" + "=";
// var ca = document.cookie.split(';');
// var cookieContent;
// for(var i=0; i<ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0)==' ') c = c.substring(1);
//     if (c.indexOf(name) == 0) { 
//         cookieContent = c.substring(name.length,c.length);
//     } else {
//         cookieContent = "";
//     }
// }

// if(cookieContent != "") {
//     if(cookieContent == "1") {
//         document.body.style.backgroundColor = "yellow";
//         document.cookie= "visitCount=2";
//     } else if(cookieContent == "2") {
//         document.body.style.backgroundColor = "red";
//         document.cookie= "visitCount=3";
//     }
// } else {
//     //first visit
//     document.body.style.backgroundColor = "black";
//     document.cookie= "visitCount=1";
// }


//==========================================================================================================