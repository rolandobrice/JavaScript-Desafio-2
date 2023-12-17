
//Elemento del DOM
function changeBorder(){
    const apple = document.getElementById("myApple")
    const validation = apple.classList.contains("border")
    if (validation == false) {
        apple.classList.add("border")
    } else {
        apple.classList.remove("border")
    } 
}