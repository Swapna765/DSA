const str = "Swapna"
console.log(str.split("").reverse().join(""));



let word = str.split("")
let result = ""

for(let i = word.length-1; i>=0; i--){  // word.length-1 Start from last index & i-- make sure the indexing going in the reverse manner
    result +=word[i]
}

console.log(result.trim())

