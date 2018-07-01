references = [
  "./images/minsk1.jpg",
  "./images/minsk2.jpg",
  "./images/riga1.jpg",
  "./images/riga2.jpg",
];
let i = 0;
let slider;
const view = document.getElementById('views');
const train = document.getElementById('train');

const audioTrack = new Audio();
audioTrack.loop = true;
audioTrack.src = './audio/train.mp3';
audioTrack.volume = 0.3;

const animationStart = document.getElementById('playAnimation');

const animationStopt = document.getElementById('stopAnimation');
animationStart.addEventListener('click', function(){
  audioTrack.load();
    setTimeout(function(){
      audioTrack.play(); 
      console.log(1); 
    },0) 
  slider = setInterval(function(){
    if(i === references.length-1){
      i = 0;
    }else{
      i = i + 1 
    }  
    view.style.background = `url(${references[i]})no-repeat center/cover`; 
  },1500)   

})

animationStopt.addEventListener('click', function(){
  clearInterval(slider); 
  audioTrack.pause();
} )

 



