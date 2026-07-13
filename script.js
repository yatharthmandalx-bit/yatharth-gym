// ==============================
// YATHARTH GOLD GYM
// SCRIPT PART 1
// ==============================

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Sticky Navbar

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.classList.add("sticky");

}else{

navbar.classList.remove("sticky");

}

});

// Welcome Popup

window.onload=()=>{

setTimeout(()=>{

alert("🔥 Welcome to YATHARTH GOLD GYM 🔥");

},1000);

};
// ==============================
// SCRIPT PART 2
// ==============================

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText=`
position:fixed;
bottom:25px;
right:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#FFD700;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px gold;
z-index:9999;
`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Contact Form Demo

const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("✅ Demo Submitted Successfully!");

form.reset();

});

}

// Instagram Buttons

document.querySelectorAll(".gold-btn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

if(btn.textContent.includes("Join")){

window.open("https://www.instagram.com/ym_webstudio?igsh=d2F5ZjRlc3ZlYWIz&utm_source=qr","_blank");

}

});

});
// ==============================
// SCRIPT PART 3
// ==============================

// Fade Animation

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";
sec.style.transform="translateY(50px)";
sec.style.transition="1s";

observer.observe(sec);

});

// Counter Animation

document.querySelectorAll(".stat-box h2").forEach(counter=>{

const update=()=>{

const target=parseInt(counter.innerText);

let count=+counter.getAttribute("data-count")||0;

const inc=Math.ceil(target/80);

if(count<target){

count+=inc;

counter.setAttribute("data-count",count);

counter.innerText=count+"+";

setTimeout(update,25);

}else{

counter.innerText=target+"+";

}

};

update();

});

// Gallery Zoom

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("click",()=>{

img.classList.toggle("zoom");

});

});

// Console Message

console.log("🔥 YATHARTH GOLD GYM WEBSITE LOADED SUCCESSFULLY 🔥");

// =========================
// SCRIPT PART 2
// =========================

// Scroll To Top Button

const topBtn = document.createElement("button");
topBtn.id = "topBtn";
topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
document.body.appendChild(topBtn);

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

// Contact Form Demo

const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your demo message has been received.");
    form.reset();
  });
}

// Fade In Animation

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {

  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
  section.style.transition = "0.8s ease";

  observer.observe(section);

});

// =========================
// SCRIPT PART 3
// =========================

// Gallery Image Zoom

document.querySelectorAll(".gallery img").forEach(img => {

  img.addEventListener("click", () => {

    img.classList.toggle("zoom");

  });

});

// Join Now Button

const joinBtn = document.querySelector(".gold-btn");

if (joinBtn) {

  joinBtn.addEventListener("click", () => {

    window.open(
      "https://www.instagram.com/ym_webstudio?igsh=d2F5ZjRlc3ZlYWIz&utm_source=qr",
      "_blank"
    );

  });

}

// Loading Effect

document.body.style.opacity = "0";

window.addEventListener("load", () => {

  document.body.style.transition = "opacity .8s ease";
  document.body.style.opacity = "1";

});

// Console Message

console.log("🏆 YATHARTH GOLD GYM Premium Website Loaded Successfully");
