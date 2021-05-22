var p1, p2;
var count=0;

document.querySelector(".btn").addEventListener("click", function()
{
    if(count==0){
        p1=prompt("Enter your name");
        p2=prompt("Enter your opponent's name");
        count++;
    }

    document.querySelectorAll("h2")[0].innerHTML = p1;
    document.querySelectorAll("h2")[1].innerHTML = p2;
    document.querySelector(".btn").innerHTML = "Click me to continue";

    var random1=Math.random()*6;
    random1=Math.floor(random1)+1;

    var dice1Image = "dice" + random1 + ".png";
    var dice1ImageSource = "images/" + dice1Image;

    document.querySelector("img").setAttribute("src", dice1ImageSource);
    document.querySelector("img").setAttribute("alt", dice1Image);

    var random2=Math.random()*6;
    random2=Math.floor(random2)+1;

    var dice2Image = "dice" + random2 + ".png";
    var dice2ImageSource = "images/" + dice2Image;

    document.querySelectorAll("img")[1].setAttribute("src", dice2ImageSource);
    document.querySelectorAll("img")[1].setAttribute("alt", dice2Image);

    if(random1===random2){
        document.querySelector("h1").innerHTML="Draw!";
    }
    else if(random1>random2){
        document.querySelector("h1").innerHTML="🏆 " + p1 + " Wins!";
    }
    else{
        document.querySelector("h1").innerHTML=p2 + " Wins! 🏆";
    }
})