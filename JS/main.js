var problem = [];
var result = 0;

function digitsAdd(objButton){
  if(document.getElementById('display').innerHTML === result){
    problem = [];
    problem.push(result);
    clearDisplay();
  }

  document.getElementById('display').innerHTML += objButton.value;
}

function equals(){
  problem.push(document.getElementById('display').innerHTML);
  var problemString = problem.join('');
  result = eval(problemString);
  document.getElementById('display').innerHTML = result;
}

function clearDisplay(){
  problem = [];
  document.getElementById('display').innerHTML = " ";
}

function changeSigns(){
  var display = document.getElementById('display').innerHTML;
  var negOrPos = parseInt(display) * -1;
  document.getElementById('display').innerHTML = negOrPos;
}

function operation(theButton){
  if(document.getElementById('display').innerHTML == result){
    problem = [];
    // problem.push(document.getElementById('display').innerHTML);
  }
  problem.push(document.getElementById('display').innerHTML); //this works
  problem.push(theButton.value);
  document.getElementById('display').innerHTML = " ";
}

function backspace(){
  var displayed = document.getElementById('display').innerHTML;
  displayed = displayed.slice(0, -1);
  document.getElementById('display').innerHTML = displayed;
  console.log(displayed);
}
