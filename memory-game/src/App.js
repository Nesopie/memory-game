import React, { useState, useEffect } from 'react'

const App = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [catArray, setCatArray] = useState([]);
    setCatArray([...catArray, {letter: 'a', clicked: 'false'}]);

    return (
        <div>
            <Header currentScore={currentScore} bestScore={bestScore}/>
            <div>{catArray}</div>
        </div>
    )
}

const Header = (props) => {
    return (
        <div>
            <header>
                <div>
                    Memory Game
                </div>
                <div>
                    <div>
                        Current Score: {props.currentScore}
                    </div>
                    <div>
                        Best Score: {props.bestScore}
                    </div>
                </div>
            </header>
            <hr></hr>
        </div>
    )
}

const generateCatArray = () => {
    const catArray = [generateCatItem('a'),generateCatItem('b'),generateCatItem('c'), generateCatItem('d')];
    return catArray;
}

const generateCatItem = (letter) => {
    return {
        let: letter,
        clicked: false
    }
}

export default App
