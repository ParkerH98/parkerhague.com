
let buttons = document.querySelectorAll(".btn")
buttons.forEach(function(currentBtn) {


    currentBtn.addEventListener("click", function (){
        bclick(this.id)
    })
})


function changeColor(id){

    let buttons = document.querySelectorAll(".btn")
    buttons.forEach(function(currentBtn) {

        currentBtn.style.backgroundColor = "#ff7979"
    })

    document.getElementById(id).style.backgroundColor = "#f9ca24"
}
