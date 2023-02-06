import wordBank from './wordlebank.txt'

export const currentBoard=[
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]

export const generateWordSet=async()=>{
    let wordSet;
    let todaysWord;
    await fetch(wordBank)
    .then((res)=>res.text())
    .then((result)=>{
        const wordArr  =result.split("\n")
        todaysWord = wordArr[Math.floor(Math.random()*wordArr.length)]
        wordSet = new Set(wordArr)
    })
    return {wordSet,todaysWord}
}