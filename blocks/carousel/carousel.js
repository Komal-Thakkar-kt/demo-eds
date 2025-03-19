import Swiper from './swiper-bundle.min.js';

export default function decorate(block) {
  block.classList.add('swiper');
  const swiperWrapper = document.createElement('div');
  swiperWrapper.classList.add('swiper-wrapper');

  const nextEle = document.createElement('div');
  nextEle.classList.add('swiper-button-prev');

  const prevEle = document.createElement('div');
  prevEle.classList.add('swiper-button-next');

  Array.from(block.children).forEach((row) => {
    // console.log(row);
    row.classList.add('swiper-slide');
    swiperWrapper.append(row);
  });
  block.append(swiperWrapper);
  block.append(nextEle);
  block.append(prevEle);

  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: true,
  });

  Swiper(block, swiper);
}
