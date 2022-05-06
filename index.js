var speed=0.02,time=0;
bird=document.getElementById("birdy");
x=40
y=0
y1=0
y2=0
y3=0
hurdleup=document.getElementById("barup");
hurdledown=document.getElementById("bardown");
function movebirdy(e)
{
    var keycode=e.keyCode;
    if(keycode==32 || keycode==38)
    {
        if(parseInt(bird.style.top)<0)
        {
            ;
        }
        else
        {
            if(x>10)
            {
                x-=7;
                bird.style.top=x+"vh";
                speed=0.02;
                time=0;
            }
        }
    }    
}
var gravity=setInterval(()=>
{
    if(x<70)
    {
        time++;
        speed=speed+0.00001*time;
        x+=speed*time+0.00005*time*time;
        console.log(document.getElementById("birdy").style.top);
        document.getElementById("birdy").style.top=x+"vh";
    } 
},20
);
var barrup=setInterval(()=>
{
    y+=0.3
    document.getElementById("barup").style.right=y+"vw";
    if(y>95 || Math.abs(y3-y)<40)
    {
        y=Math.floor(Math.random()*(-100)); 
        console.log(y);        
    }
},10
);
var barrdown=setInterval(()=>
{
    y1+=0.3
    document.getElementById("bardown").style.right=y1+"vw";
    if(y1>95 || Math.abs(y2-y1)<40)
    {
        y1=Math.floor(Math.random()*(-100)); 
        console.log(y);        
    }
},10
);
var barrdown1=setInterval(()=>
{
    y2+=0.3
    document.getElementById("bardown1").style.right=y2+"vw";
    if(y2>95)
    {
        y2=Math.floor(Math.random()*(-75)); 
        while(Math.abs(y2-y1)<40)
        {
            y2=Math.floor(Math.random()*(-75)); 
        
        } 
        
    }
},10
);
var barrup1=setInterval(()=>
{
    y3+=0.3
    document.getElementById("barup1").style.right=y3+"vw";
    if(y3>95)
    {
        y3=Math.floor(Math.random()*(-75)); 
        while(Math.abs(y3-y)<40)
        {
            y3=Math.floor(Math.random()*(-75)); 
        
        } 
                
    }
},10
);