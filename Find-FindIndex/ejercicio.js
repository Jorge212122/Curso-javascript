const ganadores = [
    { id: 1, name: 'Jennifer', ticketNumber: 001 },
    { id: 8, name: 'Michael', ticketNumber: 008 },
    { id: 15, name: 'Emily', ticketNumber: 015 },
    { id: 47, name: 'Charlie', ticketNumber: 047 },
]

function encontrarGanador (name){
    const winner = ganadores.find(participants => participants.name === name)
    return winner || 'No winner found with that name.'
}

function findIndexWinnerByTicket (ticketNumber) {
    const index = ganadores.findIndex(participant => participant.ticketNumber === ticketNumber)
    return index !== -1 ? index : 'No winner found with that ticket number.'
}

function displayWinnerInformation (winner) {
    if (winner !== undefined && winner != null && winner !== 'No winner found with that name.'){
        console.log('Winner information: ', winner)
    } else {
        console.log('No winner found.')
    }
}

const winnerByName = encontrarGanador('Emily')
const indexWinnerByTicket = findIndexWinnerByTicket(008)

displayWinnerInformation(winnerByName)
console.log('Index of winner by ticket Number: ', indexWinnerByTicket)