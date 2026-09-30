// Two strings are anagrams if they contain the same characters.

let str1 = "listen"
let str2 = "slient"

let sort1 = str1.split("").sort().join("")
let sort2 = str2.split("").sort().join("")


if(sort1 === sort2){
    console.log("Anagram string")
}
else{
    console.log("Not a Anagram string")
}