const num1=Math.floor(Math.random()*90);

const num2=Math.floor(Math.random()*90);

const questionElement= document.getElementById('question');

const formElement=document.getElementById('form');

const inputElement=document.getElementById('input')

const scoreElement=document.getElementById('score')

//we need to get value from localstorage 

let score=JSON.parse(localStorage.getItem('score'));    // converting score value to num

if(!score){

    score=0;
}

scoreElement.innerText=`Score: ${score}`;

questionElement.innerText=`What is ${num1} multiply by ${num2}?`;

// actual mathematics for the correct answer, whatever the answer is we have to compare it with the input text.


const correctAnswer=num1*num2;

// whatever the data we have in our form we have to track the data thats why we have to addeventlistener.

//submit action is performed because each time we are submiting the call back function is activated and we want the information of input text.


formElement.addEventListener('submit',()=>{

    const userAnswer=+inputElement.value; // + added to convert string to integer.

    //but the value of input text is always of string type;

    // console.log(userAnswer,typeof userAnswer);

    if(userAnswer===correctAnswer){

        score++;
        console.log(score);
        updateLocalStorage();
    }
    else{

        score--;
        console.log(score);
        updateLocalStorage();
    }
})

//we can store the score in the local storage of the browser

function updateLocalStorage(){

    localStorage.setItem('score',JSON.stringify(score));
}
