let one = document.querySelector(".one")
    one.addEventListener('mousedown', function (){
        document.getElementById("image").style.display = "none";
        document.getElementById("love").style.display = "block"}
 )
 one.addEventListener('mouseup', function (){
    document.getElementById("image").style.display = "block";
    document.getElementById("love").style.display = "none"}
)
 