const slidesArray = [
    {
        id: 1,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.U8Me_YBWF42n1NGZdYLV6gHaEo%26pid%3DApi&f=1',
    },
    {
        id: 2,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.SLZm1hecv0zdhrgLrH8N9QHaEo%26pid%3DApi&f=1',
    },
    {
        id: 3,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oX7Xc7JsKN9kBn0NrPLYKQHaEo%26pid%3DApi&f=1',
    },
    {
        id: 4,
        img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xNjYkpV0by8e4PyuLCS-RQFNC7%26pid%3DApi&f=1',
    },
]
//ELEMENTS
const slidesBlock = document.getElementById('slides');
const slideDots = document.getElementById('slideDots');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


let currentSlide = 0;


//FUNCTIONS
function renderSlide(numOfSlide) {
    let current = slidesArray[numOfSlide]

    const div = document.createElement('div')
    div.classList.add('slide-item');
    div.innerHTML = `
        <img src="${current.img}" id="slide"></img>
    `
    slidesBlock.append(div)
    
}

function renderDots(arr) {
    for(let i = 0; i < arr.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot')
        slideDots.append(dot)
    }
    activeDot(currentSlide)
};

function activeDot(n) {
    const dotsArr = document.querySelectorAll('.dot');
    for(dotItem of dotsArr) {
        dotItem.classList.remove('active');
    }
    dotsArr[n].classList.add('active')
}

function nextSlide() {
    currentSlide++
    if(currentSlide > slidesArray.length - 1) {
        currentSlide = 0
    }
    renderSlide(currentSlide)
    activeDot(currentSlide)
}

function prevSlide() {
    currentSlide--
    if(currentSlide < 0) {
        currentSlide = slidesArray.length - 1;
    }
    renderSlide(currentSlide)
    activeDot(currentSlide)
}

//ACTIONS
window.addEventListener('DOMContentLoaded', ()=> {
    renderSlide(currentSlide);
    renderDots(slidesArray);
});


nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);