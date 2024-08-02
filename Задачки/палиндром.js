let str = 'Умер, и мир ему'


function isLetter(char){
   return char.toLowerCase() !== char.toUpperCase()

}

function isPalindrom(str){
    let start = 0
    let end = str.length - 1
    
    while (start < end) {


        var firstChar = str[start]
        var endChar = str[end]
        if (!isLetter(firstChar)){
            start++
            continue
        }
        if (!isLetter(endChar)){
            end--
            continue
        }
        
        if (firstChar.toLowerCase() !== endChar.toLowerCase()){
            return false
        }
        start++;
        end--;
    
    }
    return true
}

console.log(isPalindrom(str))