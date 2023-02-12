let counText=document.querySelector('.count');
let count=0;
function increase(){
    count+=1;
counText.innerText=count;
}
function reset(){
    count=0;
    counText.innerText=count;  
}
function decrease(){
    count-=1;
    counText.innerText=count;
}
