const reset = document.querySelector('.Reset');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const myNum = document.querySelector(".number");

let number = 0;
myNum.innerHTML = number;

increment.addEventListener("click", function() {
    number++;
    myNum.innerHTML =number;
    if(number >0){
        myNum.style.color ="green";

    }
  
 
  });


  decrement.addEventListener("click", function() {
    number--;
    myNum.innerHTML = number;
    if(number<0){
        myNum.style.color="orange"

    }
 
  });
  reset.addEventListener("click", function() {
    number = 0;
    myNum.innerHTML =   number;
    myNum.style.color="red"
 
  });