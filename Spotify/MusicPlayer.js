
let play1=document.querySelector("#play1");
play1.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="Tera chera";
    songName.style.color.white;
})
let play2=document.querySelector("#play2");
play2.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="Kabhi jo badal";
    songName.style.color.white;
})
let play3=document.querySelector("#play3");
play3.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="channa mereya";
    songName.style.color.white;
})
let play4=document.querySelector("#play4");
play4.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="Kamoshiyan";
    songName.style.color.white;
})
let play5=document.querySelector("#play5");
play5.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="Thodi jagah";
    songName.style.color.white;
})
let play6=document.querySelector("#play6");
play6.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="Bandeya re Bandeya";
    songName.style.color.white;
})

let play7=document.querySelector("#play7");
play7.addEventListener("click",(e)=>
{
    let songName=document.getElementById("songName") 
    songName.innerText="chal ve thu bandeya";
    songName.style.color.white;
})

// songs------->

var songIndex=0;
let audioElement=new Audio('Songs/play1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('progressBar')
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'))
var songs=[
    
       { songName:"Tera chehra", filepath:"Songs/tera_Chehra.mp3"},
       { songName:"Kabhi jo bhadal", filepath:"Songs/kabhi Jo Baadal.mp3"},
       { songName:"Channa mereya", filepath:"Songs/Channa_Mereya.mp3"},
       { songName:"Khamoshiyaan", filepath:"Songs/Khamoshiyan.mp3"},
       { songName:"Thodi jagah", filepath:"Songs/Thodi jagah.mp3"},
       { songName:"Bandeya re Bandeya", filepath:"Songs/Bandeya Rey Bandeya.mp3"},
       { songName:"chal ve tu Bandeya", filepath:"Songs/chal ve tu Bandeya.mp3"},
    
]



// play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        songName.innerText="Tera chehra";
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity=0;
        songName.innerText="";
    }

})



audioElement.addEventListener('timeupdate',()=>
{
    // console.log('timeupdate')

    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>
{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})


const makeAllPlays=()=>
{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>
    {
        Element.classList.add("fa-circle-play")
        Element.classList.remove("fa-circle-pause")
        
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>
{
    Element.addEventListener('click', (e)=>{
        window.songIndex=e.target.id;
        // setGlobal(songIndex)
        audioElement.src=`Songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        Element.classList.remove("fa-circle-play")
        Element.classList.add("fa-circle-pause")
        masterPlay.classList.remove("fa-circle-play")
        masterPlay.classList.add("fa-circle-pause")
        gif.style.opacity=1;
        
    })

   
})

let logout=document.getElementById('Logout')

logout.addEventListener('click',()=>
{
    window.location='http://127.0.0.1:5500/login/login.html'
})

