// console.log('connected js file')

const callData=[]

// favorite counter

function favoriteCount() {
      const favoriteCounter = document.getElementById('fav-count')
      let currentFavoriteCounter = parseInt(favoriteCounter.textContent)
      currentFavoriteCounter++;
      favoriteCounter.textContent = currentFavoriteCounter
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
    alert(`Calling ${serviceName} (${number})...`)

  // call history

    const data= {
    dataName: serviceName,
    dataNumber: number,
    date:new Date().toLocaleTimeString()

  }
  callData.push(data)
  // console.log(callData)

  const callHistoryData= document.getElementById('call-history-data')

    const div= document.createElement('div')
    div.innerHTML=`
    <div class="flex justify-between items-center bg-[#F2F2F2] rounded-xl p-1 mt-3">
      <div>
        <h1>${data.dataName}</h1>
        <p>${data.dataNumber}</p>
      </div>
      <div>
        <h1>${data.date}</h1>
      </div>
    </div>
    `
    callHistoryData.appendChild(div)

  } else {
    alert("No sufficient balance")
  }

   
}
  
// clear Feature

function clearCallHistory() {
      document.getElementById('call-history-data').innerHTML = ""
}




