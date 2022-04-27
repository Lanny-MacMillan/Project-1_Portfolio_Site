const spaceBattle = () => {
    window.open('https://fanciful-caramel-fdd279.netlify.app/', "_blank");
}
const RockPaperScissors = () => {
    window.open(url, "_blank");
}
const home = () => {
    open('index.html');
}
const about = () => {
    // open('about.html');
    url('about.html')
}
const resume = () => {
    open('resume.html');
}
const projects = () => {
    open('projects.html');
}
console.log()
$(()=>{
    $('#sb').on('click', spaceBattle);
    $('#rps').on('click', RockPaperScissors);
    $('#1').on('click', home);
    $('#2').on('click', about);
    $('#3').on('click', resume);
    $('#4').on('click', projects);




});

<!-- <a href="index.html">Home</a>
<a href="about.html">About</a>
<a href="resume.html">Resume</a>
<a href="projects.html">Projects</a> -->
