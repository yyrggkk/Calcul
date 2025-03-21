
let X;
let B;
let C;
function part1(operation){
    A=parseFloat(document.querySelector(".res").innerHTML);
    switch(operation){
        case "somme":document.querySelector(".res").innerHTML="+";break;
        case "soustraction":document.querySelector(".res").innerHTML="-";break;
        case "produit":document.querySelector(".res").innerHTML="x";break;
        case "division":document.querySelector(".res").innerHTML="/";break;
    }
    switch(operation){
        case "somme":C=somme;break;
        case "soustraction":C=soustraction;break;
        case "produit":C=produit;break;
        case "division":C=division;break;
    }
    
}
function part2(){
    B=parseFloat(document.querySelector(".res").innerHTML);
    
    A=C(A,B);
    document.querySelector(".res").innerHTML=A;

}
function print1(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+1
    document.querySelector(".res").innerHTML=Y;
}
function print2(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+2
    document.querySelector(".res").innerHTML=Y;
}
function print3(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+3
    document.querySelector(".res").innerHTML=Y;
}
function print4(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+4
    document.querySelector(".res").innerHTML=Y;
}
function print5(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+5
    document.querySelector(".res").innerHTML=Y;
}
function print6(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+6
    document.querySelector(".res").innerHTML=Y;
}
function print7(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+7
    document.querySelector(".res").innerHTML=Y;
}
function print8(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+8
    document.querySelector(".res").innerHTML=Y;
}
function print9(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+9
    document.querySelector(".res").innerHTML=Y;
}
function print0(){
    Y=document.querySelector(".res").innerHTML;
    switch(Y){
        case "+":Y=0;break;
        case "-":Y=0;break;
        case "x":Y=0;break;
        case "/":Y=0;break;
        case "":Y=0;break;
    }
    Y=parseFloat(Y);
    Y=Y*10+0
    document.querySelector(".res").innerHTML=Y;
}
function reset(){
    A="";
    document.querySelector(".res").innerHTML=A;
}
function somme(A,B){
    return A+B;
}
function soustraction(A,B){
    return A-B;
}
function produit(A,B){
    return A*B;
}
function division(A,B){
    if(B!=0){
        return A/B;
    }else{
        return "Error math"
    }
    
}
