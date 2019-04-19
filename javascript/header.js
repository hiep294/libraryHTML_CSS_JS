
const navigator = document.querySelector('#navigator');
navigator.addEventListener('click', (event) =>{
  const ul = event.target.parentElement.parentElement;
  const liS = ul.children;
  for (let i = 0; i < liS.length; i++){
    if( liS[i].classList.contains('current')){
      liS[i].classList.remove('current');
      break;
    }
  }
  event.target.parentElement.classList.add('current');
})
