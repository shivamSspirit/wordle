import React, { useState, useContext, useEffect } from "react";
import { currentBoard, generateWordSet } from "./words";

export const Context = React.createContext("wordleContext");

const WordleContext = ({ children }) => {
    const [board, setBoard] = useState(currentBoard)
    const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 })
    const [wordSet, setWordSet] = useState(new Set())
    const [disabledletters, setDisablesLetters] = useState([])
    const [gameover, setGameOver] = useState({
        gameOver: false, guessedWord: false
    })
    const [correctWord, setCorrectWord] = useState('')
    const [themes, setThemes] = useState("light")


    const toggleTheme = () => {
        setThemes((theme) => theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        generateWordSet().then((words) => {
            setWordSet(words.wordSet)
            setCorrectWord(words.todaysWord)
        })
    }, [])

    const onSelectletter = (keys) => {
        if (currAttempt.letterPos > 4) {
            return
        }
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keys
        setBoard(newBoard)
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 })
    }

    const onSelectdelete = () => {
        if (currAttempt.letterPos === 0) {
            return
        }
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos - 1] = "";
        setBoard(newBoard)
        setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 })
    }

    const onSelectEnter = () => {
        if (currAttempt.letterPos !== 5) {
            return;
        }
        let currword = "";
        for (let i = 0; i < 5; i++) {
            currword += board[currAttempt.attempt][i]
        }
        if (wordSet.has(currword.toLowerCase())) {
            setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 })
        }
        else {
            alert("word not found")
        }
        if (currword.toLowerCase() === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true })
            return;
        }
        if (currAttempt.attempt === 5 && currword.toLowerCase() === correctWord) {
            setGameOver({ gameOver: true, guessedWord: true })
        }
        if (currAttempt.attempt === 5) {
            setGameOver({ gameOver: true, guessedWord: false })
        }
    }


    let contextValue = {
        board, setBoard,
        currAttempt, setCurrAttempt,
        onSelectletter, onSelectdelete,
        onSelectEnter, correctWord,
        disabledletters, setDisablesLetters,
        gameover, setGameOver, themes, toggleTheme
    };

    return (
        <>
            <Context.Provider value={contextValue}>
                {children}
            </Context.Provider>
        </>
    );

}

export default WordleContext;
export const useWordle = () => useContext(Context)