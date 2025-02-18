let timer;
let running=false;
let seconds=0,minutes=0,hours=0;
function updateDisplay()
{
    const display=document.getElementById("display");
    let formattedTime=(hour<10?"0": "")+hours+":"+(minutes<10?"0": "")+minutes+":"+(seconds<10?"0": "")+seconds;
    display.textContent=formattedTime;
}
function startStop()
{
    if(running)
    {
        clearInterval(timer);
        document.getElementById("startStop").textContent="Start";
    }
    else
    {
        timer=setInterval(()=>
        {
            seconds++;
            if (seconds===60)
            {
                seconds=0;
                minutes++;
            }
            if(minutes===60)
            {
                minutes=0;
                hours++;
            }
            updateDisplay();
        },1000);
        document.getElementById("startStop").textContent="Stop";
    }
    running=!running;
}
function reset()
{
    clearInterval(timer);
    running=false;
    seconds=0;
    minutes=0;
    hours=0;
    updateDisplay();
    document.getElementById("startStop").textContent="Start";
}
document.getElementById("startStop").addEventListener("click",startStop);
document.getElementById("reset").addEventListener("click",reset);
updateDisplay();
