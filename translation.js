const alphabet = [ 'gh','th','ng','nk','cw','ea','ate','oe','f','u','o','r','c','g','w','h','n','i','j','p','x','s','t','b','e','m','l','d','a','y','k','qu' ]
const runic    = [ 'ᛇ', 'ᚦ', 'ᛝᛣ','ᛝᛣ','ᛢ', 'ᛠ', 'ᚪᛏ', 'ᛟ', 'ᚠ','ᚢ','ᚩ','ᚱ','ᚳ','ᚷ','ᚹ','ᚻ','ᚾ', 'ᛁ','ᛡ','ᛈ','ᛉ', 'ᛋ','ᛏ','ᛒ','ᛖ','ᛗ','ᛚ','ᛞ','ᚫ','ᚣ','ᛣ','ᛢ' ]
var alphabox
var runicbox


window.onload = () => 
{
    alphabox = document.getElementById('alphabox');
    runicbox = document.getElementById('runicbox');
}

function replace()
{
    let sentence = alphabox.value;
    for (let i=0; i<alphabet.length; i++)
    {
        console.log(alphabet[i]+' : '+runic[i])
        sentence.replace(alphabet.values(i),runic.values(i))
        // sentence.replace('f','ᚠ')
    }
    console.log(sentence)
    runicbox.value = sentence;
}