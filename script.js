// console.log('connected js file')

const callData=[]

// favorite counter

function favoriteCount() {
      const favoriteCounter = document.getElementById('fav-count');
      let currentFavoriteCounter = parseInt(favoriteCounter.textContent);
      currentFavoriteCounter++;
      favoriteCounter.textContent = currentFavoriteCounter;
    }
// copy counter

function copyCount(){
    const copyCounter= document.getElementById('copy-count')
    let currentCopyCounter = parseInt(copyCounter.textContent)
    currentCopyCounter++
    copyCounter.textContent= currentCopyCounter
}

// copy text function

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

// calling feature

function callButton(serviceId1, serviceId2) {
  const coinCounterEl = document.getElementById('coin-count')
  let currentCoin = parseInt(coinCounterEl.innerText);         

  const serviceName = document.getElementById(serviceId1).innerText
  const number = document.getElementById(serviceId2).innerText

  if (currentCoin >= 20) {
    currentCoin -= 20
    coinCounterEl.innerText = currentCoin; 
    alert(`Calling...  ${serviceName} (${number})`)
  } else {
    alert("No sufficient balance");
  }
  
}
  






