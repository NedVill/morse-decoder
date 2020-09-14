const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    'space': ' '
};

function decode(expr) {
    let arr = [];

    for (let i = 0; i <= expr.length; i += 10) {
        let str = expr;
        if (str.substr(i, 10) !== '') {
            arr.push(str.substr(i, 10));
        }
    }

    arr = arr.map((item, idx) => {
        item = item.split('10').join('.');
        item = item.split('11').join('-');
        item = item.split('**********').join('space');
        item = item.split('00').join('');
        item = MORSE_TABLE[item];
        return item;
    })

    return arr.join('');
    
}
module.exports = {
    decode
}