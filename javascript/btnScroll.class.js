addEventListener(`DOMContentLoaded`, () => {
  const irArribaBtn = document.querySelector(`#irArribaBtn`);
  const indicadorScroll = document.querySelector(`.indicadorScroll`);

  const pixelInicial = () =>
    document.documentElement.scrollTop || document.body.scrollTop;

  const irArriba = () => {
    if (pixelInicial() > 0) {
      scrollTo(0, 0);
    }
  };

  const barraScroll = () => {
    if (pixelInicial() > 50) {
      irArribaBtn.className = `mostrar`;
    } else {
      irArribaBtn.className = `ocultar`;
    }
    let alto =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let avanceScroll = (pixelInicial() / alto) * 100;
    indicadorScroll.style.width = `${avanceScroll}%`;
  };

  irArribaBtn.addEventListener(`click`, irArriba);
  window.addEventListener(`scroll`, barraScroll);
});
