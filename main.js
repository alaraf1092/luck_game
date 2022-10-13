const formElm = document.querySelector('form');
const winScore = document.querySelector('.winScore');
console.log(winScore);
const winner = document.querySelector('.winner');
const p1Score = document.querySelector('.pl1Score');
const p2Score = document.querySelector('.pl2Score');
const p3Score = document.querySelector('.pl3Score');

const maxVal = document.querySelector('#maxNum');
const minVal = document.querySelector('#minNum');
const maxValSub = document.querySelector('#maxIn');
const minValSub = document.querySelector('#minIn');


const inputNumElm = document.querySelector('#inputnum');
const submit = document.querySelector('#submit');
const reset = document.querySelector('#reset');

const pl1BtnElm = document.querySelector('.p1Btn');
const pl2BtnElm = document.querySelector('.p2Btn');
const pl3BtnElm = document.querySelector('.p3Btn');

//variable declaring
let plr1Score;
let plr2Score;
let plr3Score;
let p1Turn;
let p2Turn;
let p3Turn;
let winScoreDefault;
let isGameOver;
let winPerson;
function setInitialValue(){
    plr1Score = 0;
    plr2Score = 0;
    plr3Score = 0;
    p1Turn = true;
    p2Turn = false;
    p3Turn = false;
    winScoreDefault = 20;
    isGameOver = false;
    winPerson = "";
    pl1BtnElm.removeAttribute('disabled');
    pl2BtnElm.removeAttribute('disabled');
    pl3BtnElm.removeAttribute('disabled');
}
setInitialValue();

function setDefaultDOMValue(){
    p1Score.textContent = plr1Score;
    p2Score.textContent = plr2Score;
    p3Score.textContent = plr3Score;
    winScore.textContent = winScoreDefault;
    winner.textContent = winPerson;


}
setDefaultDOMValue();


function inputvalidation(inputVal){
    let invalid = false;
    //logic for checking valid number....
    //only way to check number or not is (NaN !== NaN)
    //first we have to check it's number or not by -> Number('wrwer3');
    if(!inputVal || inputVal !== inputVal ){
        alert('Enter a positive integer value!');
        invalid = true;
    }
    return invalid;
}
function resetInput(){
    inputNumElm.value=''
}
//working with submit.....
formElm.addEventListener('submit', (evnt)=>{
    evnt.preventDefault();
    const inputVal = Number(inputNumElm.value);
    
    const invalid = inputvalidation(inputVal);
    if(invalid)
    return invalid;
    console.log(inputVal);
    //console.log(invalid);
    winScoreDefault = inputVal;
    inputNumElm.value = ""; //to reset the input
    resetInput();
    winScore.textContent = inputVal;

});

//setting max and min value for generating random numbers.....

/*maxValSub.addEventListener('click',(evnt)=>{
    evnt.preventDefault();
    const maxVAl = maxVal.value;
    maxVal.value ="";
    console.log(maxVAl);
});

minValSub.addEventListener('click',(evnt)=>{
    evnt.preventDefault();
    const minVAl = minVal.value;
    maxVal.value ="";
    console.log(minVAl);
})
*/









//players button click management......

pl1BtnElm.addEventListener('click', (evnt)=>{
    if(p1Turn && !isGameOver){
        plr1Score += Math.floor(Math.random()*6);
    p1Score.textContent = plr1Score;
    }
    p1Turn = false;
    pl1BtnElm.setAttribute('disabled', 'disabled');//disabling the button after click
    p2Turn = true;
    pl2BtnElm.removeAttribute('disabled');
    p3Turn = false;
    pl3BtnElm.setAttribute('disabled','disabled');

    if(plr1Score>=winScoreDefault  || plr1Score >= inputVal){
        isGameOver = true;
        winner.textContent = "Player 1"
        pl1BtnElm.setAttribute('disabled','disabled');
        pl2BtnElm.setAttribute('disabled','disabled');
        pl3BtnElm.setAttribute('disabled','disabled');
    }

})

pl2BtnElm.addEventListener('click', (evnt)=>{
    if(p2Turn && !isGameOver){
        plr2Score += Math.floor(Math.random()*6);
    p2Score.textContent = plr2Score;
    }
    p2Turn = false;
    pl2BtnElm.setAttribute('disabled', 'disabled');//disabling the button after click
    p3Turn = true;
    pl3BtnElm.removeAttribute('disabled');
    p1Turn = false;
    pl1BtnElm.setAttribute('disabled', 'disabled');//disabling the button after click

    if(plr2Score>=winScoreDefault || plr2Score >= inputVal){
        isGameOver = true;
        winner.textContent = "Player 2"
        pl1BtnElm.setAttribute('disabled','disabled');
        pl2BtnElm.setAttribute('disabled','disabled');
        pl3BtnElm.setAttribute('disabled','disabled');
    }
})

pl3BtnElm.addEventListener('click', (evnt)=>{
    if(p3Turn && !isGameOver){
        plr3Score += Math.floor(Math.random()*6);
    p3Score.textContent = plr3Score;
    }
    p3Turn = false;
    pl3BtnElm.setAttribute('disabled', 'disabled');//disabling the button after click
    p1Turn = true;
    pl1BtnElm.removeAttribute('disabled');//enbling the button
    p2Turn = false;
    pl2BtnElm.setAttribute('disabled', 'disabled');//disabling the button after click

    if(plr3Score>=winScoreDefault || plr3Score >= inputVal){
        isGameOver = true;
        winner.textContent = "Player 3"
        pl1BtnElm.setAttribute('disabled','disabled');
        pl2BtnElm.setAttribute('disabled','disabled');
        pl3BtnElm.setAttribute('disabled','disabled');
    }
})

reset.addEventListener('click',()=>{
    setInitialValue();
    setDefaultDOMValue(); //updating the dom 
    
})