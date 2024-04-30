const second =document.querySelector('#sec')

let startwatch;
function start(){
   let sec = 0

   startwatch = setInterval(function()  {
       sec += 1
        second.innerHTML=sec
        
    }, 1);
}
function stop(){
    clearInterval(startwatch)

}

function reset(btn){
    if(btn === 'reset')
    {
        second.innerHTML=0
    }
}