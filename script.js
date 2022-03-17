'use strict';
const textField = document.querySelector('.text-field');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const btn0 = document.querySelector('.btn-0');
const btnDiv = document.querySelector('.btn-d');
const btnMinus = document.querySelector('.btn-mi');
const btnMultiply = document.querySelector('.btn-m');
const btnAdd = document.querySelector('.btn-a');
const btnClear = document.querySelector('.btn-c');
const btnEquals = document.querySelector('.btn-e');

let values = Array.from(textField.innerText);

const init = function () {
  document.querySelector('.text-field').innerText = '';
  values = [];
};
init();

const updateInput = function () {
  textField.innerText = values.join('');
};

// console.log(values);

//Button Functionaly
btn1.addEventListener('click', function (e) {
  // console.log(document.querySelector('.btn'));
  values.push(e.target.innerText);
  updateInput();
});
btn2.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn3.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn4.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn5.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn6.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn7.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn8.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn9.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btn0.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btnDiv.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btnMultiply.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btnMinus.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
btnAdd.addEventListener('click', function (e) {
  values.push(e.target.innerText);
  updateInput();
});
//Clear values
btnClear.addEventListener('click', function (e) {
  init();
});
// Perform Operations
btnEquals.addEventListener('click', function (e) {
  const newValue = (textField.innerText = eval(textField.innerText));
  values = [newValue];
  console.log(values);
});
// console.log(document.querySelector('.btn'));
