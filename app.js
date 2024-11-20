const alat = document.querySelector('.alert');
const menb = document.querySelector('.menu-bell');
const mena = document.querySelector('.a');
const myshop = document.querySelector('.my-shop');
const trial = document.querySelector('.shopify-main1');
const setOptions = document.querySelector('.set-options');
const aUp = document.querySelector('.a-up');
const aDown = document.querySelector('.a-down');


menb.addEventListener('click', function () {
   if(alat.classList.contains('blind')){
        alat.classList.remove('blind');
    }else{
        alat.classList.add('blind');
    } 
});

mena.addEventListener('click', function (){
    if(myshop.classList.contains('blind')){
        myshop.classList.remove('blind');
    }else{
        myshop.classList.add('blind');
    } 
});

function closeTrial(){
    trial.classList.add('blind');
}
function closeCard(){
    setOptions.classList.add('blind');
    aUp.classList.add('blind');
    if(aDown.classList.contains('blind')){
        aDown.classList.remove('blind');
    }
}
function openCard(){
    setOptions.classList.remove('blind');
    aUp.classList.remove('blind');
    aDown.classList.add('blind');
}

const setOpt = document.querySelectorAll('.set-opt');

// const sof = document.querySelectorAll('.set-opt-false');
const a = document.querySelectorAll('.search');
const sopImg = document.querySelectorAll('.set-img');
const sop = document.querySelectorAll('.sop');

setOpt.forEach((sept, index)=>{
    sept.addEventListener('click', ()=>{
        sop.forEach(sp =>{
            if(sp.classList.contains('active')){
                sp.classList.remove('active');
            }
        })
        sof.forEach(sf =>{
            if(!sf.classList.contains('blind')){
                sf.classList.add('blind');
            }
        })
        sopImg.forEach(s0I =>{
            if(!s0I.classList.contains('blind')){
                s0I.classList.add('blind');
            }
        })
        if(!sop[index].classList.contains('active') || sof[index].classList.contains('blind')
        || sopImg[index].classList.contains('blind')){

            sop[index].classList.add('active');
            sof[index].classList.remove('blind');
            sopImg[index].classList.remove('blind');

        }else{
            // sop[index].classList.remove('active');
            // sof[index].classList.add('blind');
            // sopImg[index].classList.add('blind');
        }
    })
})

const count = document.getElementById('count');
const range = document.querySelector('.reat');
const sclick = document.querySelectorAll('.svg-click');
const svg1 = document.querySelectorAll('.svg1');
const svg2 = document.querySelectorAll('.svg2');

let r = 0;
let rwidth = 14.4;

sclick.forEach((sc, index)=>[
    sc.addEventListener('click', async ()=>{
        //14.4;
        if(!svg1[index].classList.contains('blind') && svg2[index].classList.contains('blind')){
            r++;
            svg1[index].classList.add('blind');
            svg2[index].classList.remove('blind');
            
        }else{
            r--;
            svg1[index].classList.remove('blind');
            svg2[index].classList.add('blind');
        }
    
        range.style.width = rwidth * r; 
        count.innerText = r;
    })
])


