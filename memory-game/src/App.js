import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import turkishAngora from './images/turkishAngora.png'
import bengalCat from './images/bengalCat.png'
import ragdoll from './images/ragdoll.png'
import britishShorthair from './images/britishShorthair.png'
import maineCoon from './images/maineCoon.png'
import tabby from './images/tabby.png'
import norwegianForestCat from './images/norwegianForestCat.png'

const App = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    let images = [
        {
            catName: "Turkish Angora",
            src: turkishAngora,
            clicked: false,
            id: uniqid()
        },

        {
            catName: "Bengal Cat",
            src: bengalCat,
            clicked: false,
            id: uniqid()

        },

        {
            catName: "British Shorthair",
            src: britishShorthair,
            clicked: false,
            id: uniqid()
        },

        {
            catName: "Ragdoll",
            src: ragdoll,
            clicked: false,
            id: uniqid()
        },

        {
            catName: "Maine Coon",
            src: maineCoon,
            clicked: false,
            id: uniqid()
        },

        {
            catName: "Tabby",
            src: tabby,
            clicked: false,
            id: uniqid()
        },

        {
            catName: "Norwegian Forest Cat",
            src: norwegianForestCat,
            clicked: false,
            id: uniqid()
        }
    ];

    const [catArray, setCatArray] = useState(images);

    useEffect(() => {
        const cardOnClick = (e) => {
            const cardID = e.target.id;
            for(let i = 0; i < catArray.length; i++) {
                //iterate through the array and find the object which has the same index as the card which is clicked
                if(catArray[i].id === cardID) {
                    let newArray = shuffle(catArray);
                    setCatArray(newArray);
                    if(!catArray[i].clicked) {
                        catArray[i].clicked = true;
                        const greater = bestScore < currentScore ? currentScore : bestScore;
                        setCurrentScore(currentScore + 1);
                        setBestScore(greater);
                    }else {
                        setCurrentScore(0); //lose, set score to 0
                        const greater = bestScore < currentScore ? currentScore : bestScore;
                        setBestScore(greater); //update best score
                        for(i = 0; i < catArray.length; i++)  //make all the clicked cards to be false as game is restarted
                            catArray[i].clicked = false;

                        break;
                    }
                }
            }
        }
        function shuffle(array) {
            let currentIndex = array.length;
            let randomIndex;

            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        let cards = document.querySelector(".catCard");
        cards.addEventListener("click", cardOnClick);
    })
    return (
        <div>
            <Header currentScore={currentScore} bestScore={bestScore}/>
            <CatCards catArray={catArray}/>
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

const CatCards = (props) => {
    const { catArray } = props;
    return (
        <div className="catCards">
            {catArray.map((catItem) => {
                return <CatCard catItem={catItem} key={catItem.id}/>
            })}
        </div>
    )
}

const CatCard = (props) => {
    const { catItem } = props;
    return (
        <div key={catItem.id} className="catCard" id={catItem.id}>
            <img src={catItem.src}></img>
            <div className="cardText">{catItem.catName}</div>
        </div>
    )
}

export default App;
