// // HOME ANIMATIONS

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".menu-btn");


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");
    
    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
		navToggle.setAttribute('aria-expanded', false);
    }
});

const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
	if(!menuOpen){
		menuBtn.classList.add('open');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	}
});

function startLoader() {
    let counterElement = document.querySelector(".count p");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue < 100) {
            let increment = Math.floor(Math.random() * 10) + 1;
            currentValue = Math.min(currentValue + increment, 100);
            counterElement.textContent = currentValue;

            let delay = Math.floor(Math.random() * 200) + 25;
            setTimeout(updateCounter, delay);
        }
    }

    updateCounter();
}

startLoader();
gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

let textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml16 .letter',
        translateY: [-100, 0],
        easing: "easeOutExpo",
        duration: 1500,
        delay: (el, i) => 30 * i
    })
    .add({
        targets: '.ml16 .letter',
        translateY: [0, 100],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 2000 + 30 * i
    })

gsap.to(".pre-loader", {
    scale: 0.5, 
    ease: "power4.inOut",
    duration: 2,
    delay: 3
})

gsap.to(".loader", {
    height: "0", 
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75
})

gsap.to(".loader-bg", {
    height: "0", 
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4,
})

gsap.from(".loader-2", {
    y: 0,
    ease: "power4.inOut",
    duration: 3,
    delay: 3.75
})

gsap.to(".loader-2", {
    y: -1600,
    ease: "power4.inOut",
    duration: 3,
    delay: 3.75
})

gsap.from(".loader-2-mobile", {
    y: 0,
    ease: "power4.inOut",
    duration: 3,
    delay: 3.75
})

gsap.to(".loader-2-mobile", {
    y: -1400,
    ease: "power4.inOut",
    duration: 3,
    delay: 3.75
})

    gsap.from(".header h1", {
        y: 400,
        ease: "power4.inOut",
        duration: 2,
        delay: 4.25,
        stagger: 0.05
    })

    gsap.from(".scroll-icon-container", {
        y: 400,
        ease: "power4.inOut",
        duration: 2,
        delay: 4.25,
        stagger: 0.05
    })

gsap.from(".img", {
    x: 600,
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.75,
    stagger: 0.25
})

gsap.to(".img", {
    x: 0,
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.75,
    stagger: 0.25
})

gsap.from(".placeholder", {
    y: 300,
    ease: "power4.inOut",
    duration: 2,
    delay: 4,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".logo", {
    y: -300,
    ease: "power4.inOut",
    duration: 2,
    delay: 4.5,
})

gsap.from("#menu-burger", {
    y: -300,
    ease: "power4.inOut",
    duration: 2,
    delay: 3.5,
})

gsap.to("#menu-burger", {
    y: 0,
    ease: "power4.inOut",
    duration: 2,
    delay: 3.5,
})

gsap.from("#nav1", {
    y: -300,
    ease: "power4.inOut",
    duration: 2,
    delay: 4.75,
})

gsap.from("#nav2", {
    y: -300,
    ease: "power4.inOut",
    duration: 2,
    delay: 5,
})

gsap.from("#nav3", {
    y: -300,
    ease: "power4.inOut",
    duration: 2,
    delay: 5.25,
})

gsap.from(".contactPlaceholder", {
    duration: 2,
    delay: 4.25,
    stagger: 0.05,
    opacity: 0
})

gsap.from("#subheader", {
    duration: 2,
    delay: 4.25,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".about-title", {
    x: -2000,
    ease: "power4.inOut",
    duration: 2,
    delay: 5.25,
})

gsap.from(".me-title", {
    x: 1700,
    ease: "power4.inOut",
    duration: 2,
    delay: 5,
})

gsap.from(".about-text-1", {
    duration: 2,
    delay: 4.75,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".about-text-2", {
    duration: 2,
    delay: 5,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".about-text-3", {
    duration: 2,
    delay: 5.25,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".about-text-4", {
    duration: 2,
    delay: 5.5,
    stagger: 0.05,
    opacity: 0
})

gsap.from(".about-text-5", {
    duration: 2,
    delay: 5.75,
    stagger: 0.05,
    opacity: 0
})

gsap.delayedCall(6, function() {
    const targets = [
        ".pre-loader",
        ".loader",
        ".loader-bg",
        ".loader-content",
        ".count",
        ".copy",
        ".m-16",
    ];

    targets.forEach(target => {
        document.querySelectorAll(target).forEach(el => {
            el.style.zIndex = -5;
        });
    });
});

    const items = document. queryselectorAl1('#item-1, #item-2, #item-3');
    const placeholder = document. queryselector(' .placeholder');
    const subheader = document. querySelector('#subheader');

    function changeColors() {
    gsap.to(' .contact-container', { backgroundColor: '#000', duration: 0.5 });
    gsap.to(' .placeholder, nav, footer, a', { color: '#fff', duration: 0.5 });
    }

    function revertColors() {
    gsap.to(' .contact-container', { backgroundcolor: '#ee3e3', duration: 0.5 }); gsap.to(' .placeholder, nav, footer, p', { color: '#000', duration: 0.5 });
    }

    items. forEach((item) => {
    item. addEventListener('mouseover', changecolors); 
    item. addEventListener('mouseout', revertColors);
    })

    function animateScale(element, scalevalue) {
        gsap. fromTo(element, { scale: 1 }, { scale: scaleValue, duration: 2, ease: "power1.out" });
    }
        function wrapLetters(text) {
        placeholder.innerHTML =
        [... text]. forEach(letter => {
        const span = document .createElement ('span');
        span.style.filter = 'blur (8px)'
        span.textContent = letter;
        placeholder.appendchild(span);
        });
    }

    function animateBlurEffect() {
        const letters = placeholder.children;
        let index = 0;
        function clearNextLetter() {
        if (index < letters.length) {
        gsap.to(letters[index], { filter: 'blur(0px)', duration: 0.5 });
        index++;
        if (index < letters. length) {
        setTimeout(clearNextLetter, 100);
        }
    }
}

    setTimeout(clearNextLetter, 0);
}

    function shuffleLetters(finalText) {
        wrapLetters('');
        wrapLetters(finalText.replace(/. /g,''));

        let textArray = finalText.split('');
        let shufflingCounter = 0;
        let intervalhandles = [];

        function shuffle(index) {
        if (shufflingCounter < 30) {
        textArray[index] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math. floor(Math.random() * 26)];
        placeholder.children[index].textContent = textArray[index];
        } else {
            placeholder.children[index].textContent = finalText.chartAt(index);
            clearInterval(intervalHandles[index]);
        }
    }

    for (let i = 0; i < finalText. length; i++) {
        intervalHandles[i] = setInterval(shuffle, 80, i);
        }
        setTimeout (() => {
        shufflingCounter = 30;
        for (let i = 0; i < finalText. length; i++) {
        placeholder.children[i].textContent = finalText.charAt(i) ;
        clearInterval(intervalHandles[i]);
        }
        animateBlurEffect();
    }, 1000);
}

function updatePlaceholderText (event) {
    const newText = event. target. textContent. toUpperCase() ;
    const itemIndex = Array. from(items). indexOf(event. target);
    const newSubHeaderText = subHeaders [itemIndex]. toUpperCase() ;
    subheader.textContent = newsubHeaderText;
    animatescale (placeholder, 1.25);
    shuffleLetters(newText) ;
    }
    function resetPlaceholderText() {
    const defaultText = 'CONTACT' ;

    subheader.textContent = defaultSubHeaderText;
    animateScale(placeholder, 1.25);
    shuffleLetters(defaultText);
    }

    items.forEach((item) => {
        items.addEventListener('mouseover', updatePlaceholderText);
        items.addEventListener('mouseout',resetPlaceholderText );

    });


const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let mouseMoved = false

const pointer = {
  x: 0.5 * window.innerWidth,
  y: 0.5 * window.innerHeight,
}

const params = {
  pointsNumber: 40,
  widthFactor: 10,
  mouseThreshold: 0.5,
  spring: 0.25,
  friction: 0.5,
}

const trail = new Array(params.pointsNumber)
for(let i = 0; i < params.pointsNumber; i++) {
  trail[i] = {
    x: pointer.x,
    y: pointer.y,
    dx: 0,
    dy: 0,
  }
}

window.addEventListener('click', (event) => {
  updateMousePosition(event.pageX, event.pageY);
})

window.addEventListener('mousemove', (event) => {
  mouseMoved = true
  updateMousePosition(event.pageX, event.pageY);
})

window.addEventListener('touchmove', (event) => {
  mouseMoved = true
  updateMousePosition(event.tagetTouches[0].pageX, event.tagetTouches[0].pageY);
})

function updateMousePosition(eX, eY) {
  pointer.x = eX
  pointer.y = eY
}

setupCanvas()
update(0)

window.addEventListener('resize', setupCanvas)

function update(t) {
  
  if(!mouseMoved) {
    pointer.x = (0.5 + 0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) * window.innerWidth
    pointer.y = (0.5 + 0.2 * Math.cos(0.005 * t) + 0.1 * Math.cos(0.001 * t)) * window.innerHeight
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  trail.forEach((p, pIdx) => {
    const prev = pIdx === 0 ? pointer : trail[pIdx - 1]
    const spring = pIdx === 0 ? 0.4 * params.spring : params.spring
    p.dx += (prev.x - p.x) * spring
    p.dy += (prev.y - p.y) * spring
    p.dx *= params.friction
    p.dy *= params.friction
    p.x += p.dx
    p.y += p.dy
  })
  
  let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, "rgba(160, 93, 134, 1)")
  gradient.addColorStop(1, "rgba(57, 34, 115, 1)")
  
  ctx.strokeStyle = gradient
  ctx.lineCap = "round"

  ctx.beginPath();
  ctx.moveTo(trail[0].x, trail[0].y)
  
  for(let i = 1; i < trail.length - 1; i++) {
    const xc = 0.5 * (trail[i].x + trail[i + 1].x)
    const yc = 0.5 * (trail[i].y + trail[i + 1].y)
    ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc)
    ctx.lineWidth = params.widthFactor * (params.pointsNumber - i)
    ctx.stroke()
  }
  
  window.requestAnimationFrame(update)
}

function setupCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}