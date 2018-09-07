
var inContainer = false;

function dropDownOver(str,num,t)
{
    t.style.left = 200;
    t.style.height = 25*num;
    t.style.backgroundColor = "blue";
    t.style.width = 150;
    for(i =1; i <= num;i++ )
    {
        document.getElementById(str + i).style.display = "block";
        
    }
}

function dropDownExit(str,num,t)
{
    t.style.height = 25;
    for(i =1; i <= num;i++ )
    {
        document.getElementById(str + i).style.display = "none";
    }
}

function changeColour(t)
{
    t.style.backgroundColor = "red";
}

function changeColourBack(t)
{
    t.style.backgroundColor = "transparent";
}
function init(t)
{
    t.style.margin = 1300;
}
