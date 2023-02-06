import React from "react";
import Word from "../Word/Word";
import './board.css'

const Board = () => {
    return (
        <div className="board">
            <div className="row">
                <Word letterposition={0} attemptval={0} />
                <Word letterposition={1} attemptval={0} />
                <Word letterposition={2} attemptval={0} />
                <Word letterposition={3} attemptval={0} />
                <Word letterposition={4} attemptval={0} />
            </div>
            <div className="row">
                <Word letterposition={0} attemptval={1} />
                <Word letterposition={1} attemptval={1} />
                <Word letterposition={2} attemptval={1} />
                <Word letterposition={3} attemptval={1} />
                <Word letterposition={4} attemptval={1} />
            </div>
            <div className="row">
                <Word letterposition={0} attemptval={2} />
                <Word letterposition={1} attemptval={2} />
                <Word letterposition={2} attemptval={2} />
                <Word letterposition={3} attemptval={2} />
                <Word letterposition={4} attemptval={2} /> </div>
            <div className="row">
                <Word letterposition={0} attemptval={3} />
                <Word letterposition={1} attemptval={3} />
                <Word letterposition={2} attemptval={3} />
                <Word letterposition={3} attemptval={3} />
                <Word letterposition={4} attemptval={3} />
            </div>
            <div className="row">
                <Word letterposition={0} attemptval={4} />
                <Word letterposition={1} attemptval={4} />
                <Word letterposition={2} attemptval={4} />
                <Word letterposition={3} attemptval={4} />
                <Word letterposition={4} attemptval={4} />
            </div>
            <div className="row">
                <Word letterposition={0} attemptval={5} />
                <Word letterposition={1} attemptval={5} />
                <Word letterposition={2} attemptval={5} />
                <Word letterposition={3} attemptval={5} />
                <Word letterposition={4} attemptval={5} />
            </div>
        </div>
    )
}

export default Board