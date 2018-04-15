import './scss/home.scss';
import './images/logo.png';
import './images/call-answer.svg';
import './images/call-answer.png';
import './images/trash.png';
import './images/mail-envelope.png';
import './images/placeholder.png';
import './images/dropdown-icon.png';
import './images/down-arrow.svg';


  document.querySelector(".open-toggler").addEventListener('click', function () {
    let par = this.parentElement;
    if(par.style.maxHeight){
      par.style.maxHeight = null;
    } else {
      par.style.maxHeight = "100%"
      par.style.overflow = "hidden"
    }
  });