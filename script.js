'use strict'

const options = [
    {id:"option1",text:"Javascript",vote:"0" },
    {id:"option2", text:"Python", vote:"0"},
    {id:"option3", text:"C++", vote:"0"},
    {id:"option4", text:"Java", vote:"0"}
]
function submitVote(){

    const selectedOption = document.querySelector('input[name="poll"]:checked');
    

    if(!selectedOption){
        alert("please select an Option")
        return;
    }
  const optionId = selectedOption.value;
  const selectedOptionObj = options.find((option) => option.id === optionId);
  console.log(selectedOptionObj)
  if(selectedOptionObj){
    selectedOptionObj.vote++;
     console.log(selectedOptionObj);
     displayResult();
  }
}

function displayResult(){
    const result = document.getElementById('result');
    result.innerHTML = "";

    options.forEach((option) =>{
        const percentage = ((option.vote/ getTotalVotes()) * 100).toFixed(2) || 0;
        const barWidth = percentage > 0 ? percentage + "%" : "0%";

        const optionResult = document.createElement("div");
        optionResult.className = "option-result";
        optionResult.innerHTML =`
        <span class = "option-text">${option.text}</span>
        <div class ="bar-container">
          <div class = "bar" style= "width:${barWidth};"></div>
        </div>
        <span class="percentage">${percentage}%</span>
        `;
        result.appendChild(optionResult);
    })

}

function getTotalVotes(){
    return options.reduce((total,option) => total + option.vote,0  )
}
displayResult();