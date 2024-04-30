const second =document.querySelector('#sec')

let startwatch;
function start(){
    sec = 0

   startwatch = setInterval(function()  {
       sec += 1
        second.innerHTML=sec
        
    }, 1);
}
function stop(){
    clearInterval(startwatch)

}