import './scss/index.scss';

  document.querySelector(".open-toggler").addEventListener('click', function () {
    let par = this.parentElement;
    if(par.style.maxHeight){
      par.style.maxHeight = null;
    } else {
      par.style.maxHeight = "100%"
      par.style.overflow = "hidden"
    }
  });