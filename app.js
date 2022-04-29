$(()=>{

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
    $('#2').on('click', about);
    $('#3').on('click', resume);
    $('#4').on('click', projects);


});















//============================================   THE GRAVEYARD ==================================================
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
