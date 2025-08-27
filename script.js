// console.log('connected js file')
// favorite counter

function favoriteCount() {
      const favoriteCounter = document.getElementById('fav-count');
      let currentFavoriteCounter = parseInt(favoriteCounter.textContent);
      currentFavoriteCounter++;
      favoriteCounter.textContent = currentFavoriteCounter;
    }




