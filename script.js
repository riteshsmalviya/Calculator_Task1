//navbar

const navbar = document.getElementById('navbar');

navbar.addEventListener('mouseenter', function () {
  navbar.classList.add('navbar-hover');
});

navbar.addEventListener('mouseleave', function () {
  navbar.classList.remove('navbar-hover');
});


//calculation

let string = "";
let buttons = document.querySelectorAll('.calculator-key');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

