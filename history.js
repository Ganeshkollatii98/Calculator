function toggleHistory() {
    const historySection = document.getElementById('history');
    if (historySection.style.display === 'none' || historySection.style.display === '') {
      historySection.style.display = 'block';
    } else {
      historySection.style.display = 'none';
    }
  }

  function addToHistory(expression) {
    const historyList = JSON.parse(localStorage.getItem("calcHistory")) || [];
    historyList.push(expression);
    localStorage.setItem("calcHistory", JSON.stringify(historyList));
  
    renderHistory();
  }
  
  function renderHistory() {
    const historyContainer = document.getElementById("historyContent");
    const historyList = JSON.parse(localStorage.getItem("calcHistory")) || [];
  
    historyContainer.innerHTML = "";
    if(historyList.length){
        historyList.forEach((entry, index) => {
            const historyItem=document.createElement('div')
            const historyExpression = document.createElement("p");
            const historyResult=document.createElement('span')

            historyItem.classList.add('his_item')
            historyExpression.classList.add('his_item-expression')
            historyResult.classList.add('his_item-result')

            historyExpression.innerHTML = `${entry} =`
            historyResult.innerText =eval(entry);

            historyItem.appendChild(historyExpression);
            historyItem.appendChild(historyResult);
            historyContainer.appendChild(historyItem);
          });
    }
    else{
        historyListEmpty(historyContainer);
    }
  }

  const historyListEmpty=(historyContainer)=>{
    const historyItem = document.createElement("h6");
    historyItem.classList.add('no-history')
    historyItem.innerText = `There is no history yet.`;
    historyContainer.appendChild(historyItem)
  }
  
  function clearHistory() {
    localStorage.removeItem("calcHistory");
    renderHistory();
  }
  
  window.onload = function () {
    renderHistory();
  };
  