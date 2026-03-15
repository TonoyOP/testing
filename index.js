//NAV CODE
const menuIcon = document.querySelector('.menu');
const cancelMenuIcon = document.querySelector('.canceli');
const mobileNavbar = document.querySelector('.mnav');
const bodySelect = document.querySelector('body');


menuIcon.addEventListener('click', () => {

    mobileNavbar.classList.add('menu-active');
    bodySelect.style.overflow = "hidden";
});

cancelMenuIcon.addEventListener('click', () => {

    mobileNavbar.classList.remove('menu-active');
    bodySelect.style.overflow = "scroll";
});

//SOUND PLAYER CODE
const themeAudio = new Audio('./assets/theme.mp3');
themeAudio.loop = true;
themeAudio.volume = 0.3;
themeAudio.pause();

const soundBtn = document.querySelector('.sound-lottie');
const lottie = document.querySelector('.onoffbtn');
const soundMain = document.querySelector('.sound-main');


let soundPlaying = false;

soundBtn.addEventListener('click', () => {

    if (!soundPlaying) {

        themeAudio.play();
        soundMain.innerHTML = `<dotlottie-wc src="https://lottie.host/cba0e2ca-ef96-4592-be25-b0b6d7b6e52a/CxboA3pfnw.lottie" speed="1"
        style="width: 60px; height: 60px " mode="forward" loop autoplay class="onoffbtn"></dotlottie-wc>`
        soundBtn.style.alignItems = "center";




        soundPlaying = true;

    } else {

        themeAudio.pause();
        soundMain.innerHTML = `<img src="./assets/HomeAsset/Frame 3631.webp" alt="" srcset="" width="60px" ></img>`


        soundPlaying = false;

    }

});

// GSAP WORD SCROLL REVEAL

gsap.registerPlugin(ScrollTrigger, SplitText);

const split = new SplitText(".mainpbtext", {
  type: "words"
});

const words = split.words;

gsap.set(words, {
  opacity: 0.2
});

gsap.to(words, {
  opacity: 1,
  stagger: {
  each: 0.5
},
  ease: "none",
  scrollTrigger: {
    trigger: ".problemtxt",
    start: "top top",
    end: "+=200%",
    scrub: true,
    pin: true
  }
});

// TAP SECTION FUNCTIONALITY

const buttons = document.querySelectorAll(".btns");
const tImage = document.querySelector(".tmainimg img");
const tMainTxt = document.querySelector(".tmaintxt");

const tapContent = [
{
 img: "./assets/HomeAsset/we innovate.webp",
 text: "We deal the complexity of modern web trends and technologies with innovative approaches and measures, so that it can reach everyone regardless of their current stature."
},
{
 img: "./assets/HomeAsset/we revolutionize.webp",
 text: "We refine and utilize complex revolutionary technologies into thoughtful, elegant solutions, and help brands step into the future of the web with confidence."
},
{
 img: "./assets/HomeAsset/we serve.webp",
 text: "We ensure that your brand or personal presence doesn’t remain left out amongst the crowd and dirt. So, you can tell your story the way it is, without noise."
}
];

buttons.forEach((btn, index) => {

btn.addEventListener("click", () => {

    // activate correct button
    buttons.forEach(b => b.classList.remove("btnactive"));
    btn.classList.add("btnactive");

    // change content
    tImage.src = tapContent[index].img;
    tMainTxt.innerHTML = tapContent[index].text;

    // animation
    gsap.from(tImage,{
        opacity:0,
        x:-60,
        duration:1.1,
        ease:"power2.out"
    });

    gsap.from(tMainTxt,{
        opacity:0,
        x:60,
        duration:1.1,
        ease:"power2.out",
        onComplete: () => {
            tImage.style.opacity = "1";
            tMainTxt.style.opacity = ".4";
        }
    });

});

});

//Mobile tAP section

const tBtnOne = document.querySelector('.btnt1');
const tBtnTwo = document.querySelector('.btnt2');
const tBtnThree = document.querySelector('.btnt3');


tBtnOne.addEventListener('click',()=>{

  tBtnOne.classList.toggle('btnactive');
  tBtnTwo.classList.remove('btnactive');
  tBtnThree.classList.remove('btnactive');
  tImage.src = "./assets/HomeAsset/we innovate.webp";
  tMainTxt.innerHTML = "We deal the complexity of modern web trends and technologies with innovative approaches and measures, so that it can reach everyone regardless of their current stature.";

  gsap.from( tImage, {
  opacity: 0,
  x: -60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from( tMainTxt, {
  opacity: 0,
  x: 60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});

function opacityFix(){

  tImage.style.opacity = '1';
  tMainTxt.style.opacity = '.4';
};


setTimeout(opacityFix, 1501);

})

tBtnTwo.addEventListener('click',()=>{

  tBtnTwo.classList.toggle('btnactive');
  tBtnOne.classList.remove('btnactive');
  tBtnThree.classList.remove('btnactive');
  tImage.src = "./assets/HomeAsset/we revolutionize.webp";
  tMainTxt.innerHTML = "We refine and utilize complex revolutionary technologies into thoughtful, elegant solutions, and help brands step into the future of the web with confidence.";

  gsap.from( tImage, {
  opacity: 0,
  x: -60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from( tMainTxt, {
  opacity: 0,
  x: 60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});
function opacityFix(){

  tImage.style.opacity = '1';
  tMainTxt.style.opacity = '.4';
};


setTimeout(opacityFix, 1501);
})

tBtnThree.addEventListener('click',()=>{

  tBtnThree.classList.toggle('btnactive');
  tBtnOne.classList.remove('btnactive');
  tBtnTwo.classList.remove('btnactive');
  tImage.src = "./assets/HomeAsset/we serve.webp";
  tMainTxt.innerHTML = "We ensure that your brand or personal presence doesn’t remain left out amongst the crowd and dirt. So, you can tell your story the way it is, without noise.";

  gsap.from( tImage, {
  opacity: 0,
  x: -60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});

gsap.from( tMainTxt, {
  opacity: 0,
  x: 60,
  stagger: 0.1,
  duration: 1.5,
  ease: "power2.out"
});
function opacityFix(){

  tImage.style.opacity = '1';
  tMainTxt.style.opacity = '.4';
};


setTimeout(opacityFix, 1501);
})