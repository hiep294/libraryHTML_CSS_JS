//open book basket
const openBasket = document.querySelector('#open-basket');
openBasket.onclick = () => {
  const bookBasket = document.querySelector('#bookBasket');
  bookBasket.classList.remove('display-none');
  const books = document.querySelector('#books');
  document.querySelector('#student-name').innerHTML = chosenStudent.name;
  document.querySelector('#student-email').innerHTML = chosenStudent.email;
  //change info:
  // let temp = '';
  // for( let i = 0; i<chosenBooks.length; i++){
  //   let myvar = '<div class="book'+i+'">            '+
  // '                <div class="book-image" style="background-image: url('+chosenBooks[i].image+')"></div>'+
  // '                <div class="book-info">'+
  // '                  <h4 id="title" class="title">'+chosenBooks[i].title+' </h4>'+
  // '                  <p>Author(s): '+chosenBooks[i].authors+'</p>'+
  // '                </div> '+
  // '                <div><i class="fa fa-trash fa-fw" id="'+i+'" onclick="deleteBook(this)"></i></div> '+
  // '              </div>';
  //   temp += myvar;
  // }
  // books.innerHTML = temp;
}

deleteBook = (e) => {
  console.log(e.target);
}

// close basket
const closeBasketBtn = document.querySelector('#close-basket');
closeBasketBtn.onclick = () =>{
  const bookBasket = document.querySelector('#bookBasket');
  bookBasket.classList.add('display-none');
}