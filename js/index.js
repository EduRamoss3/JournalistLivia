let intervalMund = 0;
let slider = document.getElementById("carouselSlider2");
let startX = 0;
let endX = 0;
let interval = 3200;
let direction = 1;
let max = 1100;
let min= 0;
let ads = document.getElementById("ads");
let indexLine = 0;
let directionLine = 1;

// Bloqueando bugs - -preventivo iphone
slider.addEventListener('touchstart',(e) => {
    startX = e.touches[0].clientX;
});
let startV = 0;

document.addEventListener('touchstart', function (e) {
  startV = e.touches[0].clientX;
}, { passive: true });


document.addEventListener('touchmove', function (e) {
  let diffX = e.touches[0].clientX - startV;
  if (Math.abs(diffX) > 10) {
    e.preventDefault(); // bloqueia o swipe lateral
  }
}, { passive: false });
// Fim Bloqueando bugs - -preventivo iphone


// CarouselSlider2 arrastar
slider.addEventListener('touchend', (e) => {
  interval = 0;
     endX = e.changedTouches[0].clientX;

     const diffX = endX - startX;

      if (Math.abs(diffX) > 50) { // limite mínimo para ser considerado "swipe"
        if (diffX < 0) {
            // arrastou para a esquerda
            direction = -1;
            intervalMund -= 400;
        } else {
            // arrastou para a direita
            direction = 1;
            intervalMund += 400;
        }

        // Limita dentro dos valores permitidos
        if (intervalMund >= min) intervalMund = min;
        if (intervalMund < -max) intervalMund = -max;

        slider.style.transform = `translateX(${intervalMund}px)`;
        slider.style.transition = 'transform 300ms';
        interval = 3200;
    }
})

function carousel() {
    intervalMund += 200 * direction;

    if (intervalMund >= min) 
    {
        intervalMund = min;
        direction = -1;
    }
    if(intervalMund <= -max)
    {
        intervalMund = -max;
        direction = 1;
    }

    slider.style.transform = `translateX(${intervalMund}px)`;
    slider.style.transition = 'transform 300ms';
}


setInterval(carousel, interval);