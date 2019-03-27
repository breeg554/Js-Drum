const keys = document.querySelectorAll('.key');
function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key_div = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key_div.classList.add('active');
};
function removeTran(e){
    // if(e.propertyName !== 'transfrom') return;
    this.classList.remove('active');
}

window.addEventListener("keydown",playSound);
keys.forEach(key=>key.addEventListener('transitionend',removeTran));