//for click the plus button to show the popup

var popoverlayvar=document.getElementById("overlay")
var popdivvar=document.getElementById("popdiv")
var plusbuttonvar=document.getElementById("plusbutton")

plusbuttonvar.addEventListener("click",function(){
    popoverlayvar.style.display="block"
    popdivvar.style.display="block"
})

//to click the cancel button to close the popup

var cancelbuttonvar=document.getElementById("cancelbutton")
cancelbuttonvar.addEventListener("click",function(event){
    event.preventDefault()
    popoverlayvar.style.display="none"
    popdivvar.style.display="none"

    //After click the add button every value in the input will get remove
    var booktitlevalue=document.getElementById("booktitle")
    var bookauthorvalue=document.getElementById("bookauthor")
    var bookdescvalue=document.getElementById("textarea_short")
    
    booktitlevalue.value=""
    bookauthorvalue.value=""
    bookdescvalue.value=""


})


//to click the add button to create a element and fix into the container
var addbuttonvar=document.getElementById("addbutton")
addbuttonvar.addEventListener("click",function(event){
    event.preventDefault()
    // get the values from the form
    var booktitlevalue=document.getElementById("booktitle").value
    var bookauthorvalue=document.getElementById("bookauthor").value
    var bookdescvalue=document.getElementById("textarea_short").value

    //check whether the user entered all the input 
    if(!booktitlevalue || !bookauthorvalue || !bookdescvalue){
        alert("Fill all the details")
        return;
    }

    //create a element tag for new
    var bookcontainerdiv=document.createElement("div")
    var booktitletag=document.createElement("h2")
    var bookauthortag=document.createElement("h3")
    var paratag=document.createElement("p")
    var deletebuttontag=document.createElement("button")

    //create a id (bookcontainer) for the newly created div tag
    bookcontainerdiv.setAttribute("id","bookcontainer")

    //create a id for delete button
   deletebuttontag.setAttribute("id","deletebutton")

   //create a onclick function call for a delete button
   deletebuttontag.setAttribute("onclick","deletefunction(event)")


    //Add the value and textcontent to the newly created tag
    booktitletag.textContent=booktitlevalue
    bookauthortag.textContent=bookauthorvalue
    paratag.textContent=bookdescvalue
    deletebuttontag.textContent="Delete"

    //add the newly created element to the bookcontainer div

    bookcontainerdiv.append(booktitletag)
    bookcontainerdiv.append(bookauthortag)
    bookcontainerdiv.append(paratag)
    bookcontainerdiv.append(deletebuttontag)

    //Add the bookcontainer div to the main as a row wise
    var containerdiv=document.getElementById("container")
    containerdiv.append(bookcontainerdiv)

    //After click the add button every value in the input will get remove
    var booktitlevalue=document.getElementById("booktitle")
    var bookauthorvalue=document.getElementById("bookauthor")
    var bookdescvalue=document.getElementById("textarea_short")

    booktitlevalue.value=""
    bookauthorvalue.value=""
    bookdescvalue.value=""

    //close the popdiv and overlay 
    popoverlayvar.style.display="none"
    popdivvar.style.display="none"

})


 //create a functionality for the delete button

 function deletefunction(event){
    event.target.parentElement.remove()
 }




