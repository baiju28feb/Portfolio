//hamburger button start//
const hamburgerButton = document.getElementById('hamburger')
const navlist = document.getElementById('nav-list')


function toggleButton() {
    navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton  )
//hamburger button end//
//Type writer effect begin
const skills = ['Software Engineer', 'Web Developer', 'Back-End Developer' ];
let count = 0;
let item = 0;
let currentitem = '';
let letter= '';

(function type (){
  if(skills.length === count)
    {
      count = 0;
    }
  currentitem = skills[count];
  letter = currentitem.slice(0, ++item);  
  document.querySelector(".type").textContent = letter;
  if(currentitem.length === item){
    count ++;
    item = 0;
  }
  setTimeout(type, 300);
})();
//Type writer effect End

//Scroll smooth begings
$(".button").click(function() {
  $('html,body').animate({
      scrollTop: $("#about-me").offset().top},
      'slow');
});

$("#aboutme").click(function(){
  $('html,body').animate({
    scrollTop: $("#about-me").offset().top},
    'slow');
  });
  $("#myprojects").click(function(){
    $('html,body').animate({
      scrollTop: $("#projects").offset().top},
      'slow');
    });

    $("#contactme").click(function(){
      $('html,body').animate({
        scrollTop: $("#contact-me").offset().top},
        'slow');
      });
    //Scroll smooth begings End
      window.addEventListener("scroll", function(){
        var header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);
      })
    //sticky navbar begin


    //sticky navbar end