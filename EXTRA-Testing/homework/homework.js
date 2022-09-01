
const layout = [
    [{type: 'VIP', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'VIP', booked: true}, {type: 'VIP', booked: false}, {type: 'NORMAL', booked: false}],
    [{type: 'NORMAL', booked: false}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: false}],
    [{type: 'ECONOMIC', booked: true}, {type: 'NORMAL', booked: true}, {type: 'NORMAL', booked: true}, {type: 'ECONOMIC', booked: false}],
    [{type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: true}, {type: 'ECONOMIC', booked: false}, {type: 'ECONOMIC', booked: false}]
  ];

function checkSeatStatus(a,b) {
    if(typeof a !== 'string') throw new TypeError('First parameter is not a string');
    if(typeof b !== 'number') throw new TypeError('Second parameter is not a number');

    let fila = getRowNumber(a);

    return layout[fila][b].booked;

}

function getRowNumber(letter) {
    return letter.charCodeAt(0) - 65;
}

function book(fila, asiento){
 if(checkSeatStatus(fila,asiento) === true){
    return `Seat in ${fila}${asiento} is not available`;
 }
 else if(checkSeatStatus(fila,asiento) === false){
    let f= getRowNumber(fila);
    layout[f][asiento].booked = true;
    return `Seat in ${fila}${asiento} successfully booked`;
 }
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book
}