/* Const Section NavMenu----------------------------------------- */
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const imgBtn = document.querySelector(".cont");
const reBtn = document.querySelector(".rebtn");
const alertBtn = document.querySelector(".alert");
const calertBtn = document.querySelector(".cbtn");
const legBtn = document.querySelector(".legbtn");
const godBtn = document.querySelector(".godbtn");
const chgBtn = document.querySelector(".txtchg");
const chg2Btn = document.querySelector(".txtchg2");
/* Const Section NavMenu End------------------------------------- */


/* Game var----------------------------------------------- */
const guess= document.getElementById("myInput4");
const audi= document.querySelector(".aplayer2");
/* Game var end------------------------------------------- */


/* Const Section PageUnlocker------------------------------------ */
var a = document.querySelector('.rebtn[href="#"]');
var b = document.querySelector('.legbtn[href="#"]');
var c = document.querySelector('.godtn[href="#"]');
var d = document.querySelector('.txtchg[href="#"]');
var e = document.querySelector('.txtchg2[href="#"]');


/* Const Section PageUnlocker End-------------------------------- */



/* Send to top of page on reload -------------------------------- */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
/* Send to top End ---------------------------------------------- */



/* NavBar Function----------------------------------------------- */
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}

cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}

imgBtn.onclick = ()=>{
    body.classList.add("continue");
    localStorage.setItem("They", "one");
}

window.onscroll = ()=>{
    this.scrollY > 40 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}
/* NavBar Function End------------------------------------------- */

/* Local Storage Manager */
if (localStorage.getItem("They")=="one"){
    body.classList.add("continue");
}

if (localStorage.getItem("Getting")=="Three"){
    audi.classList.add("adder");
}
/* Page Unlock Start and alert visibility------------------------ */


function checker(event){
    if (event.currentTarget.dataset.index==17){
        b.setAttribute('href', './finder.html');
        localStorage.setItem("Getting","Three");
      }
    if (event.currentTarget.dataset.index==18){
        a.setAttribute('href', './introPage.html');
    }
    if (event.currentTarget.dataset.index==19){
        c.setAttribute('href', './introPage.html');
    }
    if (event.currentTarget.dataset.index==20){
        d.setAttribute('href', './introPage.html');
    }
    if (event.currentTarget.dataset.index==21){
        e.setAttribute('href', './introPage.html');
    }
    
}

function alertbox(event){
    if(event.currentTarget.dataset.locked == "true"){
        checker(event)
    } else{
    alertBtn.classList.add("visalert");
    
    }
}
function off(){
    alertBtn.classList.remove("visalert");
}

/* Page Unlock End----------------------------------------------- */
/* copy bar--------------------*/ 
function myFunction() {
   
    var copyText = document.getElementById("myInput");
  
  
    copyText.select();
    /*mobile*/
    copyText.setSelectionRange(0, 99999); 
  
   
    navigator.clipboard.writeText(copyText.value);

  } 
/* copy bar End--------------------*/ 


/*Canvas-----------------------------*/


/*Canvas End-------------------------*/

var countDownDate = new Date("Sep 30, 2021 00:00:00").getTime();

/* // Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
 */


function divinity(){
    
    if (guess.value === "jesus" || guess.value === "Jesus"){ 
        body.classList.add("continue");
        localStorage.setItem("Are", "Two");
    }
    if (localStorage.getItem("Are")=="Two"){
        body.classList.add("continue");
    }
}



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 
