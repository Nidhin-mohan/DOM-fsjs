
// 1.

// document.querySelector(".side-bar .crayons-card .crayons-subtitle-2  ").innerHTML = "Nidhin"

// document.querySelector(".side-bar .crayons-card .color-base-70   ").innerHTML =
//   "I am a fullstack Web Developer from Kerala";


 2
 let arr = []
  arr = document.querySelectorAll(" .as-imagegrid-item .as-imagegrid-item-title")

arr= [...arr].map((i) => {
  return i.textContent.replace("Support", "")
})







// arr = document.querySelector(".as-imagegrid .as-imagegrid-item-title  ");
// let arr = document.querySelectorAll(".as-imagegrid .as-imagegrid-item-title");
// let newarr = [...arr].map((i) => {
//   return i.textContent.replace(" Support", "");
// });



3.



let nav = document.querySelector(".accordion-homepage")

let sec = document.createElement("section");
sec.className = "parent";

let h3 = document.createElement("h3");

h3.innerHTML = "My FAQ ";

sec.appendChild(h3);
nav.appendChild(sec);



4.
document.querySelector(" .customer-support a ").inner


5.

document.querySelector(
  " .mytabs    .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn"
);

6.


 let serch = document.querySelector(
   ".searchinput-wrapper___3YrvF .searchinput___19uW0"
 );

serch.addEventListener("mouseover",function(e){
    e.target.style.backgroundColor = "red"})

7.

 let key = document.querySelector(".homepage-hero-search .search-input-field");

 key.elements['hp-search-input'].value = "css selectors";

 key.submit();




 8.
  const div = document.querySelector("#SIvCob");
  div.remove();


  9. 

  document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.fontFamily = "monospace";

   document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.color = "#A7331C";


  10.


    document.querySelector(".btn-cta-big .login-btn-text")
     .addEventListener("mouseover", () => {
      .style.backgroundColor = "red"
     });


     let btn = document.querySelector(".btn-cta-big .login-btn-text");
     btn.addEventListener("mouseover", () => btn.style.backgroundColor = "red")
  

     11.

    let logo = document.querySelector(" .header .wrapper .logo .icon")
     logo.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')"; 

     12.

     let btns = document.querySelector(".js-repos-container .f4 .btn")
     btns.style.backgroundColor = "blue";


     13.

     document.querySelector(".fl-heading .fl-heading-text").innerHTML ="JS bootcamp"

     14.

document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px"

15.
    document.querySelector("#d560824win9b .ps-top .ps-title a").style.cssFloat = "right";




     16.

     document.querySelector(".section-title_title__VEDfK").innerHTML =" Start From Scratch";



     17.

      btn =document.querySelector(".btn-container ").innerHTML = Date().toString();

 



     18.

     document.querySelector(".p-f03-footer-container  ").style.backgroundColor = "yellow"



     document.querySelector(".footerpage  ").style.backgroundColor = "yellow"


     document.querySelector(".p-f03-footer-container ").style.background = "#E07C24"


     19.


     document.querySelector(" .navbar-brand .logo").src

     20.

     document.querySelector(".desc").style.color = "orange"