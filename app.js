$(()=>{
//======================================= MODAL ======================================
const $modal = $('#modal')
const $closeBtn = $('#close')    
const openModal = () => {
    $modal.css('display', 'block')
}
const closeModal = () => {
    $modal.css('display', 'none')
}

//================================== Backgrounds ========================================
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

//================================= On Click Functions ==================================


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
// const contact = () => {
//     window.location.href = 'contact.html';
// }

//================================= Mouseover Functions ==================================


// mouseover projects link and change text to interactive back to projects
var btn = document.querySelector(".projects");
btn.addEventListener("mouseover", function() {
    this.textContent = "Interactive!";
})
btn.addEventListener("mouseout", function() {
    this.textContent = "Projects";
})

// ==================================== Event Listeners ===================================

    $('#1').on('click', home);
    // $('#1').on('click', randomBackground());
    $('#2').on('click', about);
    $('#3').on('click', resume);
    $('#4').on('click', projects);
    $('#5').on('click', openModal);
    $closeBtn.on('click', closeModal)

});




//====================================  THE GRAVEYARD ===================================
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



//================= Change background image based on cookie visits =======================


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