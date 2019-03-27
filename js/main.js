window.addEventListener("keydown",function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key_div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key_div.classList.add('active');
});


window.addEventListener("keyup",function(e){
    const key_div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    key_div.classList.remove('active');
});