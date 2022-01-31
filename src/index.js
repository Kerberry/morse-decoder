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
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);
    let space = '**********';
    let arr1 = [];
    arr.forEach(elem =>{
        if (elem !== space){
            arr1.push(elem.match(/.{1,2}/g));
        }
        else{
            arr1.push(space);
        }
    })
    let arrSymb = [];
    
    for(letter of arr1){
        let strSymb = '';
        if (letter == space){
            arrSymb.push(space);
        }
        else{
            for(el of letter){                
                if(el == '10'){
                    strSymb += '.';
                }
                else if (el == '11'){
                    strSymb += '-';
                }
            }
            arrSymb.push(strSymb);
        }

    }
    let result = '';
    arrSymb.forEach(n =>{
        if(n == space){
            result += ' ';
        }
        else{
            result += MORSE_TABLE[n];
        }
    })
    return result;
}

module.exports = {
    decode
}