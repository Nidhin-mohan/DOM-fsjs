# Dom Manipulation Assignment

1. Webiste Name: [Dev To](https://dev.to/)

### Topics

    - Query Selctory, Inner HTML

### Sample Image

![Sample One](./Pic1.png)

### Tasks

        Target the Top description div and change the DEV Community to <Your_Name> and description to your passion

### Output

![Output](./Pic2.png)


### My answer

``
document.querySelector(".side-bar .crayons-card .crayons-subtitle-2  ").innerHTML = "Nidhin"

 document.querySelector(".side-bar .crayons-card .color-base-70   ").innerHTML =
  "I am a fullstack Web Developer from Kerala";

``


![image](/assets/ans01.png)

2. Website Name: [Apple](https://support.apple.com/en-in)

### Task

![Store](./Picture_3.png)

### Fetch all the product name and store in an array

### Output

['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']

### My answer
```
let arr = document.querySelectorAll(".as-imagegrid .as-imagegrid-item-title");
let newarr = [...arr].map((i) => {
  return i.textContent.replace(" Support", "");
});
undefined
newarr
(7) ['iPhone', 'Mac', 'iPad', 'Watch', 'AirPods', 'Music', 'TV']
```

3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

### Topics

    - Get Element By Id, Create Element, Create Text Node, Append Child

### Sample Image

![Sample One](./Pic4.png)

### Tasks

     Add another FAQ 'My New FAQ' to the list

### Output

![Output](./Pic5.png)

# my answer

```
let nav = document.querySelector(".accordion-homepage")

let sec = document.createElement("section");
sec.className = "parent";

let h3 = document.createElement("h3");

h3.innerHTML = "My FAQ ";

sec.appendChild(h3);
nav.appendChild(sec);
```
![Output](/assets/03ans)

4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

### Topics

     Query Selector, InnerText

### Sample Image

![Sample One](./Pic6.png)

### Tasks

      Change the contact number

### Output

![Output](./Pic7.png) 

## my answer

```
document.querySelector(" .customer-support a ").innerText = "+916366256689"
'+916366256689'

```

![Output](/assets/04ans.png)


5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Topics

       getElementById, createElement, InnerText, append, setAttribute

### Sample Image

![Sample One](./Pic8.png)

### Tasks

     Target the main div of card and change the Button text to Check out

### Output

![Output](./Pic9.png)

## My answer

```
document.querySelector(
  " .mytabs    .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn"
).innerText = "Check Out"
'Check Out'
```
![Output](/assets/05ans.png)



6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Topics

    -   Query Selector, Event listeners, Changing Styles

### Sample Image

![Sample One](./Pic10.png)

### Tasks

     Target the search box and on hover change thebackground color to red.

### Output

![Output](./Pic11.png)

# My answer

```
 let serch = document.querySelector(
   ".searchinput-wrapper___3YrvF .searchinput___19uW0"
 );

serch.addEventListener("mouseover",function(e){
    e.target.style.backgroundColor = "red"})

```
![Output](/assets/06ans)
    

7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

### Topics

       Form, Value, Submit

### Sample Image

![Sample One](./Pic12.png)

### Tasks

     To Search a topic in the MDN Search bar.
     First add a text to search in the search bar and then hit the submit search button to search the docs using DOM

### Output

![Output](./Pic13.png)

8. Webiste Name: [Google](https://www.google.com/)

### Topics

       Remove Elements

### Sample Image

![Sample One](./Pic14.png)

### Tasks

     Remove alternate languages from the home page languages listed

### Output

![Output](./Pic15.png)

# my ans

```
const div = document.querySelector("#SIvCob");
  div.remove();
  ```
![Output](/assets/08ans)


9. Webiste Name: [Code Wars](https://www.codewars.com/)

### Topics

       Change Font Family, Color of Text.

### Sample Image

![Sample One](./Pic16.png)

### Tasks

    Change the font family of the text to monospace and text color to the logo’s background color.

### Output

![Output](./Pic17.png)

# My answer

```
document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.fontFamily = "monospace";

   document.querySelector(
    ".content-width-extra-large .display-heading-1"
  ).style.color = "#A7331C";
  ```
![Output](/assets/09ans.png) 

10. Webiste Name: [Freecodecamp](https://www.freecodecamp.org/)
n
### Topics

       querySelector, mouseover, click eventListener,  callback function, style,

### Sample Image

![Sample One](./Pic18.png)

### Tasks

    Target the button and change background colour on mouseover

### Output

![Output](./Pic19.png)

# my answer
```
 let btn = document.querySelector(".btn-cta-big .login-btn-text");
     btn.addEventListener("mouseover", () => btn.style.backgroundColor = "red")
 ```

 ![Output](/assets/10ans.png)    

11. Webiste Name: [realme](https://www.realme.com/in/)

### Topics

       querySelector,style,background-image

### Sample Image

![Sample One](./Pic20.png)

### Tasks

    change the realme logo to ineuron logo

### Output

![Output](./Pic21.png)

# my  answer

```
 let logo = document.querySelector(" .header .wrapper .logo .icon")
     logo.style.backgroundImage = "url('https://ineuron.ai/images/ineuron-logo.png')"; 
```

![Output](/assets/11ans.png)


12. Webiste Name: [Github](https://github.com/)

### Topics

       querySelector,style,background-Color

### Sample Image

![Sample One](./Pic22.png)

### Tasks

     change the background colour of the button to blue.

### Output

![Output](./Pic23.png)

# My answer

```
 let btns = document.querySelector(".js-repos-container .f4 .btn")
     btns.style.backgroundColor = "blue"
 ```
![Output](/assets/12ans.png)

13. Webiste Name: [Hackerrank](https://www.hackerrank.com/)

### Topics

       querySelector,innerHtml

### Sample Image

![Sample One](./Pic24.png)

### Tasks

Target the top description and change “Matching developers with great companies” to ‘JSBOOTCAMP“.

### Output

![Output](./Pic25.png)

# my answer

```
 document.querySelector(".fl-heading .fl-heading-text").innerHTML ="JS bootcamp"
```
![Output](/assets/13ans.png)

14. Webiste Name: [Asus](https://www.asus.com/in/)

### Topics

      querySelector,style,font-size

### Sample Image

![Sample One](./Pic26.png)

### Tasks

       change the fontsize of “Hot Deals” to 80px

### Output

![Output](./Pic27.png)



# my answer

```
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px"
```

![Output](/assets/14ans.png)

15. Webiste Name: [Dell](https://www.dell.com/en-in/shop/deals/laptop-deals?gacd=10415953-9016-5761040-285981356-0&dgc=ST&gclid=Cj0KCQjwguGYBhDRARIsAHgRm4-XUDMhhVNyHXb3s1gY4ZBzORr_d9Se-buhJwy7asyUe7YdqEA11eEaAt6UEALw_wcB&gclsrc=aw.ds&nclid=BxjBlpBQsX6pjSHh-L8YYSU77EpfXRkG1AGMB5Wbeu386ykspfrPDnfx_DdFau20)

### Topics

      querySelector,style.textAlign

### Sample Image

![Sample One](./Pic28.png)

### Tasks

       Convert the text “G15 Gaming Laptop” from left to right

### Output

![Output](./Pic29.png)


# my answer

```
    document.querySelector("#d560824win9b .ps-top .ps-title a").style.cssFloat = "right";
```
![Output](/assets/15ans.png)


16. Webiste Name: [Vercel](https://vercel.com/)

### Topics

     querySelector,innerHTMl

### Sample Image

![Sample One](./Pic30.png)

### Tasks

      change the heading “Start with the developer” to “Start with Scratch”

### Output

![Output](./Pic31.png)

# my answer

```
 document.querySelector(".section-title_title__VEDfK").innerHTML =" Start From Scratch";
 ```
![Output](./assets/16ans.png)


17. Webiste Name: [Sony](https://www.sony.co.in/)

### Topics

    querySelector,innerHTMl

### Sample Image

![Sample One](./Pic33.png)

### Tasks

     change the button text To current Date.

### Output

![Output](./Pic32.png)

# My answer

```
btn =document.querySelector(".btn-container ").innerHTML = Date().toString();

```

![Output](/assets/17ans.png)

18. Webiste Name: [Philips](https://www.philips.co.in/)

### Topics

     querySelector,style,backgroundcolor

### Sample Image

![Sample One](./Pic34.png)

### Tasks

    change the background colour blue to orange

### Output

![Output](./Pic35.png)

# My Answer
```
   document.querySelector(".p-f03-footer-container ").style.background = "#E07C24"
```
![Output](/assets/18ans.png)


19. Webiste Name: [Canon](https://in.canon/)

### Topics

          querySelector,src

### Sample Image

![Sample One](./Pic36.png)

### Tasks

    extract the canon logo

### Output

![Output](./Pic37.png)


# my answer

```
     document.querySelector(" .navbar-brand .logo").src

```
![Output](/assets/19ans.png)

20. Webiste Name: [Oppo](https://www.oppo.com/in/)

### Topics

          querySelector,style,color

### Sample Image

![Sample One](./Pic38.png)

### Tasks

      Change the description colour black to orange

### Output

![Output](./Pic39.png)


# My answer

```
     document.querySelector(".desc").style.color = "orange"
```
![Output](/assets/20ans.png)