let bg = document.querySelector('.aviation-parallax');
let bg2 = document.querySelector('.energy-parallax');
let bg3 = document.querySelector('.electronics-parallax');
let doubleBlockImgFirst = document.querySelector('.image-block-first img')
let doubleBlockImgSecond = document.querySelector('.image-block-second img')
let layer = document.querySelector('.image-block-layer')
let layerTwo = document.querySelector('.image-block-layer-two')
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;  
    bg.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    bg2.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    bg3.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    doubleBlockImgFirst.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    doubleBlockImgSecond.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    layer.style.transform = 'translate(' + x * 10 + 'px, ' + y * 10 + 'px)';
    layerTwo.style.transform = 'translate(' + x * 10 + 'px, ' + y * 10 + 'px)';
});