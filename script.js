// console.log('connected js file')
// favorite counter

function favoriteCount() {
      const favoriteCounter = document.getElementById('fav-count');
      let currentFavoriteCounter = parseInt(favoriteCounter.textContent);
      currentFavoriteCounter++;
      favoriteCounter.textContent = currentFavoriteCounter;
    }

function copyCount(){
    const copyCounter= document.getElementById('copy-count')
    let currentCopyCounter = parseInt(copyCounter.textContent)
    currentCopyCounter++
    copyCounter.textContent= currentCopyCounter
}

function copyServiceNumber(id){
    const copyText= document.getElementById(id).innerText
    return navigator.clipboard.writeText(copyText).then(() => {
        alert("Copied number: " + copyText);
      })
    
}

document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.dataset.target;  
    copyServiceNumber(targetId);
  });
});






