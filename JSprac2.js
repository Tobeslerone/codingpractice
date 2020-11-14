document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "600px";
});

document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "yellow";
});

document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.opacity = "1";
    document.getElementById("box").style.backgroundColor = "orange";
});

document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = ".2";
});

var x = document.getElementById("button5");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Mouse Over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Mouse out!<br>";
}
