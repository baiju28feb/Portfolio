const hamburgerButton = document.getElementById('hamburger')
const navlist = document.getElementById('nav-list')


function toggleButton() {
    navlist.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton  )

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
