const start=document.querySelector('.start')
const stop=document.querySelector('.stop')
const songs=document.querySelectorAll('.song')
const song1=document.querySelector('.s1')
const song2=document.querySelector('.s2')
const song3=document.querySelector('.s3')
const play=document.querySelector('audio')



song1.addEventListener('click',function(){
 var audio=new Audio('galiya.mp3')
 audio.play();
})
song2.addEventListener('click',function(){
var audio=new Audio('https://musikringtone.com/downloads/3394/')
audio.play()
})
song3.addEventListener('click',function(){
var audio=new Audio('https://musikringtone.com/downloads/6000/')
audio.play()
})

// function play(){
//     var audio= new Audio('galiya.mp3');
//     audio.play();
// }




