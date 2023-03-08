let banner = document.querySelector('#banner');
let indice = 0;

const bannerImagens = [
  "https://loremflickr.com/cache/resized/65535_52283916720_02febe00e5_c_800_500_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_52294428543_2d04971c12_c_800_500_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_52629215410_fe74d0933d_b_800_500_nofilter.jpg",
  "https://loremflickr.com/cache/resized/65535_52305310807_218d2f2cf0_c_800_500_nofilter.jpg",
];

function trocaImagemBanner() {
  const imagemAtual = bannerImagens[indice];
  banner.style.backgroundImage = `url(${imagemAtual})`;

  if(indice < bannerImagens.length - 1) {
    indice++;
  } else {
    indice = 0;
  }
}

trocaImagemBanner();
setInterval(trocaImagemBanner, 3000);