const selectionButton = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerscoreSpan= document.querySelector('[data-computer-score]')
const yourscoreSpan= document.querySelector('[data-your-score]')
const SELECTION=[
    {
        name:'rock',
        emoji:'✊',
        beats:'scissor'
    },
    {
        name:'paper',
        emoji:'🤚',
        beats:'rock'
    },
    {
        name:'scissor',
        emoji:'✌️',
        beats:'paper'
    }
]

selectionButton.forEach(selectionButton=>{
    selectionButton.addEventListener('click', e =>{
        const selectionName=selectionButton.dataset.selection
        const selection = SELECTION.find(selection=>selection.name===selectionName)
        makeselction(selection)
    })
})

function makeselction(selection){
    const computerSelection = randomSelection()
    const yourWinner= isWinner(selection,computerSelection)
    const computerWinner= isWinner(computerSelection,selection)
    console.log(computerSelection);

    addselectionResult(computerSelection,computerWinner)
    addselectionResult(selection,yourWinner)

    if (yourWinner) incrementScore(yourscoreSpan)
    if (computerWinner) incrementScore(computerscoreSpan)

}

function incrementScore(scoreSpan){
    scoreSpan.innerText=parseInt(scoreSpan.innerText) + 1
}


function addselectionResult(selection,winner){
    const div=document.createElement('div')
    div.innerText=selection.emoji
    div.classList.add('result-selection')
    if(winner) div.classList.add('winner')
    finalColumn.after(div)
}


function isWinner(selection,opponentselection){
    return selection.beats===opponentselection.name
}

function randomSelection(){
    const randomIndex=Math.floor(Math.random()*SELECTION.length)
    return SELECTION[randomIndex]
}