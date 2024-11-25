var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

var closenav = document.getElementById("closenav")
closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//prodect search functionality

var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = document.querySelectorAll("div")

console.log(productlist)
search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count = count + 1) {
         var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display ="none"
        }
        else{
            productlist[count].style.display ="block"
        }


    }
})