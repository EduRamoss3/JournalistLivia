const carouselElement = document.querySelector('#carouselSlider2');
if (carouselElement) {
  carouselElement.addEventListener('slid.bs.carousel', function () {
    window.scrollTo({
      top: window.scrollY, // mantém o scroll onde está
      behavior: 'auto'
    });
  });
}