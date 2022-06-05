const cards = Array.from(document.getElementsByClassName('card')); // '.card' ->html kolekcija i onda ga pretovori u array
let cardOne, cardTwo = undefined; // definisao si prvu i drugu kartu

// [1,2,3,4]
cards.map(card => {
  // prodjemo kroz svaku kartu koja ima klasu '.card' i dodamo mu listener na KLIK i kada se klikne odradimo neku funkcionalnost
  card.addEventListener("click", function () {
    // na klik ovom elementu dodijelimo klasu 'card-visible'
    card.classList.add("card-visible")
    // logiramo element
    console.log(card);
    // gledamo da li ima vrijednosti u cardOne ili cardTwo
    if (cardOne === undefined) {
      // ako nema vrijednost u cardOne, udjemo u card div i trazimo card__front klasu koja ima inner html tj vrijednost
      cardOne = card.querySelector('.card__front').innerHTML
    } else if (cardOne !== undefined && cardTwo === undefined) {
      cardTwo = card.querySelector('.card__front').innerHTML
    }

    // ako oboje imaju vrijednosti poredimo ih
    if (cardOne !== undefined && cardTwo !== undefined) {
      if (cardOne === cardTwo) {
        // console.log('IMAJU ISTE VRIJEDNOSTI')
        // izbrisi iz htmla vidljive karte
        const visibleCards = Array.from(document.getElementsByClassName('card-visible'))

        visibleCards.map(card => {
          card.classList.add('constant-visible')
          card.classList.remove('card-visible')
        })
      } else {
        // console.log('NEMAJU ISTE VRIJEDNOSTI')
        const visibleCards = Array.from(document.getElementsByClassName('card-visible'))
        setTimeout(() => {
          visibleCards.map(card => {
            card.classList.remove('card-visible')
          })
        }, 1000)
      }

      cardOne = undefined
      cardTwo = undefined
    }
  });
});


/*switch (card) {
  case (cardOne == !cardTwo):
    cardOne = querySelector(".card__front").innerHTML
}*/

/*if (cardOne == !cardTwo) {
  cardOne = card.querySelector(".card__front").innerHTML
  cardTwo = card.querySelector(".card__front").innerHTML
  cardOne.classList.remove("card-visible");
  cardTwo.classList.remove("card-visible");
  console.log(cardOne)*/