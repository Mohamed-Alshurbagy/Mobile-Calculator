// Collecting Our Data:
let display = document.querySelector('h2');

let head = document.querySelector('.head')

let calc = document.querySelector('.calc');

let btns = document.querySelectorAll('button');

let screen = document.querySelector('input');

// Showing Time in Left Side :
document.querySelector('.time').innerHTML = new Date().toLocaleTimeString();

// Controle The Navbar Display or Hide:
let flag = 0;
document.querySelector('.click').onclick = function(){
  if (flag === 0){
    head.classList.add('show');
    this.innerHTML = 'X'
    flag = 1;
  }
    else{
      head.classList.remove('show')
      this.innerHTML = 'Click Me'
      flag = 0;
    }
}
// Define Main Variable:
let num1, num2, operation;

btns.forEach((btn)=>{
  btn.onclick = function(b){
    let e = b.target.innerHTML;
    if (parseInt(e) || e === '0'){
      screen.value += e
      display.innerHTML += e;
  }
    else if(e ==='.') screen.value += e;
    else if(e === 'C'){
      screen.value = '';
      display.innerHTML = '';
  }
    else if (e === '=')
    if(screen.value ==='')
      screen.value = ''
    else
    setAction(operation);
    else if(e === 'Back'){
    screen.value = screen.value.slice(0, -1);
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
    else if(e === '+/-')
    screen.value *= -1;
    else{
      switch(e){
        case '+':
          getOperation('+');
          display.innerHTML += ' + '
        break;
        case '-':
          getOperation('-');
          display.innerHTML += ' - '
        break;
        case 'x':
          getOperation('*');
          display.innerHTML += ' x ';
        break;
        case '÷':
          getOperation('/');
          display.innerHTML += ' ÷ ';
        break;
      }
    }
  }
})

// Set Operation Function:
function setAction(o) {
  num2 = parseFloat(screen.value);
  if (screen.value ==='' ) num2 = 0;
  switch(o){
    case '+':
      screen.value = num1 + num2;
    break;
    case '-':
      screen.value = num1 - num2;
    break;
    case '/':
      screen.value = num1 / num2;
    break;
    case '*':
      screen.value = num1 * num2;
    break;
     }
}

// Function to Get Operation & First Number:
function getOperation(op){
  num1 = parseFloat(screen.value);
  operation = op;
  screen.value = ''
}
// ===== ===== ===== ===== =

// End Of The Code ..

// Name: Mohamed Al. Shurbagy;

// Doing: I'm A Junior Front End Developer;

// WhatsApp: 01558656682;

// EGYPT

