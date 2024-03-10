let circumference;
let radius;
const PI = 3.14;
let operator;
let firstNumber = 0;
//initializing all the numerical values so that the number appears on the screen of the calculator when the number is clicked
document.getElementById("one").onclick = function(){
    document.getElementById("screen").textContent += "1"
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    

}
document.getElementById("two").onclick = function(){
    document.getElementById("screen").textContent += "2"
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);
}
document.getElementById("three").onclick = function(){
    document.getElementById("screen").textContent += "3";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("four").onclick = function(){
    document.getElementById("screen").textContent += "4";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("five").onclick = function(){
    document.getElementById("screen").textContent += "5";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("six").onclick = function(){
    document.getElementById("screen").textContent += "6";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("seven").onclick = function(){
    document.getElementById("screen").textContent += "7";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("eight").onclick = function(){
    document.getElementById("screen").textContent += "8";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}
document.getElementById("nine").onclick = function(){
    document.getElementById("screen").textContent += "9";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    document.getElementById("screen").textContent = String(document.getElementById("screen").textContent);

}

document.getElementById("zero").onclick = function(){
    if(document.getElementById("screen").value != 0){
        document.getElementById("screen").textContent += "0";
        document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);

    }
}
document.getElementById("AC").onclick = function(){
    document.getElementById("screen").textContent = "0";
    document.getElementById("screen").textContent = Number(document.getElementById("screen").textContent);
    
}

//operators

document.getElementById("plus").onclick = function(){
    if(document.getElementById("screen").value != 0){
        firstNumber = Number(document.getElementById("screen").textContent);
        document.getElementById("screen").textContent = 0;
        operator ="+";
    }
}

document.getElementById("minus").onclick = function(){
    if(document.getElementById("screen").value != 0){
        firstNumber = Number(document.getElementById("screen").textContent);
        document.getElementById("screen").textContent = 0;
        operator ="-";
    }
}
document.getElementById("into").onclick = function(){
    if(document.getElementById("screen").value != 0){
        firstNumber = Number(document.getElementById("screen").textContent);
        document.getElementById("screen").textContent = 0;
        operator ="*";
    }
}
document.getElementById("by").onclick = function(){
    if(document.getElementById("screen").value != 0){
        firstNumber = Number(document.getElementById("screen").textContent);
        document.getElementById("screen").textContent = 0;
        operator ="/";
    }
}
//equal
document.getElementById("equal").onclick = function(){
    if(document.getElementById("screen").value != 0 && firstNumber != 0){
        if(operator == "+"){
            document.getElementById("screen").textContent = firstNumber + document.getElementById("screen").textContent;
        }
        if(operator == "-"){
            document.getElementById("screen").textContent = firstNumber - document.getElementById("screen").textContent;
        }
        if(operator == "*"){
            document.getElementById("screen").textContent = firstNumber * document.getElementById("screen").textContent;
        }
        if(operator == "/"){
            document.getElementById("screen").textContent = firstNumber / document.getElementById("screen").textContent;
        }
    }
}