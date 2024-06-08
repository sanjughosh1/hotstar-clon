let movies = [
    {
        name: "loki",
        dis: "thie is the bast marvel web series. Hic saepe odio numquam, porro adipisci deserunt",
        Image: "images/slider 1.PNG"
    },
    {
        name: "falcon and the winter solger",
        dis: "thie is the bast marvel web series. Hic saepe odio numquam, porro adipisci deserunt",
        Image: "images/slider 2.PNG"
    },
    {
        name: "wanda vision",
        dis: "thie is the bast marvel web series. Hic saepe odio numquam, porro adipisci deserunt",
        Image: "images/slider 3.PNG"
    },
    {
        name: "raya and the last draron",
        dis: "thie is the bast marvel web series. Hic saepe odio numquam, porro adipisci deserunt",
        Image: "images/slider 4.PNG"
    },
    {
        name: "luca",
        dis: "thie is the bast marvel web series. Hic saepe odio numquam, porro adipisci deserunt",
        Image: "images/slider 5.PNG"
    }
];
const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0;//tract the current slide

const createSlider = () => {
    if(slideIndex >= movies.length){
        slideIndex= 0;
    }
    //creat DOM element
    let slide = document.createElement('div');
    var imgElement = document.createElement('img')
    let content = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    

    //attach all the elements(using append child methard)

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name))
    p.appendChild(document.createTextNode(movies[slideIndex].dis))
    content.appendChild(h1)
    content.appendChild(p)
    slide.appendChild(imgElement)
    slide.appendChild(content)
    carousel.appendChild(slide)
    
    

    //adding img sorce

    imgElement.src = movies[slideIndex].Image;
    slideIndex++
     
     //setting up elements of class names(css,html)

    imgElement.className = "slider-img"
    slide.className ="slider";
    content.className = "slide-content" ;
    h1.className = "movie-titel" ;
    p.className = "movie-dis" ;
    

  sliders.push(slide)

 

    if(sliders.length){
        sliders[0].style.marginRight = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;

    };
} 
  
 for(let i = 0; i<=2; i++){
    createSlider();
 }
 setInterval(()=>{
    createSlider();
 } ,3000);


 //video card animation

const videocard = [...document.querySelectorAll('.video-card a')];

videocard.forEach(item => {
    item.addEventListener("mouseover", ()=> {
        let video = item.children[1];
        video.play()
    })
    item.addEventListener("mouseleave", ()=> {
        let video = item.children[1];
        video.pause();
    })
})

// card slider

let cardcontainor = [...document.querySelectorAll('.card-containor')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nxtbtn = [...document.querySelectorAll('.nxt-btn')];

cardcontainor.forEach((item,i) =>{
    let containorDimention = item.getBoundingClientRect();
    let containorWidth =containorDimention.width;

    nxtbtn[i].addEventListener('click',() =>{
        item.scrollLeft += containorWidth -200;
    })
    prebtn[i].addEventListener('click',() =>{
        item.scrollLeft -= containorWidth +200;
    })
})