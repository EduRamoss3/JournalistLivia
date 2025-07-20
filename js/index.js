let intervalMund = 0;
let slider = document.getElementById("carouselSlider2");
let startX = 0;
let endX = 0;
let interval = 3200;
let direction = 1;

slider.addEventListener('touchstart',(e) => {
    startX = e.touches[0].clientX;
});


slider.addEventListener('touchend', (e) => {
     endX = e.changedTouches[0].clientX;

     const diffX = endX - startX;

      if (Math.abs(diffX) > 50) { // limite mínimo para ser considerado "swipe"
        if (diffX < 0) {
            // arrastou para a esquerda
            direction = -1;
            intervalMund -= 170;
        } else {
            // arrastou para a direita
            direction = 1;
            intervalMund += 170;
        }

        // Limita dentro dos valores permitidos
        if (intervalMund >= 510) intervalMund = 510;
        if (intervalMund < -510) intervalMund = -510;

        slider.style.transform = `translate3d(${intervalMund}px, 0px, 0px)`;
        slider.style.transition = 'transform 300ms ease-in-out';
    }
})

function carousel() {
    intervalMund += 170 * direction;

    if (intervalMund >= 510) 
    {
        intervalMund = 510;
        direction = -1;
    }
    if(intervalMund <= -510)
    {
        intervalMund = -510;
        direction = 1;
    }

    slider.style.transform = `translate3d(${intervalMund}px, 0px, 0px)`;
    slider.style.transition = 'transform 300ms';
}
setInterval(carousel, interval);