const runeMap = {
    'th' : 'ᚦ', 'ee' : 'ᛇ', 'ng' : 'ᛜ', 'ah' : 'ᚫ', 'ea' : 'ᛠ', 'qu' : 'ᛢ', 'cw' : 'ᛢ', 'st' : 'ᛥ',
    'a': 'ᚪ', 'b': 'ᛒ', 'c': 'ᚳ', 'd': 'ᛞ',
    'e': 'ᛖ', 'f': 'ᚠ', 'g': 'ᚷ', 'h': 'ᚻ',
    'i': 'ᛁ', 'j': 'ᛡ', 'k': 'ᛣ', 'l': 'ᛚ',
    'm': 'ᛗ', 'n': 'ᚾ', 'o': 'ᚩ', 'p': 'ᛈ',
    'q': 'ᛢ', 'r': 'ᚱ', 's': 'ᛋ', 't': 'ᛏ',
    'u': 'ᚢ', 'v': 'ᚡ', 'w': 'ᚹ', 'x': 'ᛉ',
    'y': 'ᚣ', 'z': 'ᚴ',
    'TH' : 'ᚦ', 'EE' : 'ᛇ', 'NG' : 'ᛜ', 'AH' : 'ᚫ', 'EA' : 'ᛠ', 'QU' : 'ᛢ', 'CW' : 'ᛢ', 'ST' : 'ᛥ',
    'A': 'ᚪ', 'B': 'ᛒ', 'C': 'ᚳ', 'D': 'ᛞ',
    'E': 'ᛖ', 'F': 'ᚠ', 'G': 'ᚷ', 'H': 'ᚻ',
    'I': 'ᛁ', 'J': 'ᛡ', 'K': 'ᛣ', 'L': 'ᛚ',
    'M': 'ᛗ', 'N': 'ᚾ', 'O': 'ᚩ', 'P': 'ᛈ',
    'Q': 'ᛢ', 'R': 'ᚱ', 'S': 'ᛋ', 'T': 'ᛏ',
    'U': 'ᚢ', 'V': 'ᚡ', 'W': 'ᚹ', 'X': 'ᛉ',
    'Y': 'ᚣ', 'Z': 'ᚴ',
    'Th' : 'ᚦ', 'Ee' : 'ᛇ', 'Ng' : 'ᛜ', 'Ah' : 'ᚫ', 'Ea' : 'ᛠ', 'Qu' : 'ᛢ', 'Cw' : 'ᛢ', 'St' : 'ᛥ',
    'tH' : 'ᚦ', 'eE' : 'ᛇ', 'nG' : 'ᛜ', 'aH' : 'ᚫ', 'eA' : 'ᛠ', 'qU' : 'ᛢ', 'cW' : 'ᛢ', 'sT' : 'ᛥ',
    '-' : '-'
};

function convertToRunes() {
    const inputText = document.getElementById('inputText').value
    const oL = document.getElementById('output').innerHTML.length
    let outputText = ''

    for (let i = 0; i < inputText.length; i++) {
        let next = inputText.substr(i, 2)
        let rune = runeMap[next]
        let rune2 = ''
        console.log(next+' : '+rune)
        if(!rune || rune==undefined) {
            rune = runeMap[inputText[i]]
            rune2 = runeMap[inputText[i+1]]
        }
        if (rune) {
            if (rune == undefined)
            {
                rune = ' '
            }
            if (rune2 == '')
            {
                if(next.length === 2) 
                {
                    i++
                }
            }
            outputText += rune;
        } else {
            outputText += inputText[i]
        }
    }
    document.getElementById('output').innerHTML = outputText
}