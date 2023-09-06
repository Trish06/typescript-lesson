const input1 = document.querySelector("#input1");
const input2 = document.querySelector('#input2');
const button = document.querySelector("button");

function add(num1, num2){
  if(typeof num1 === num2)
  return num1 + num2;
}

button.addEventListener("click", ()=>{
  console.log(add(input1.value, input2.value));
})