import React, { useState, useEffect } from 'react';
import { FlexBox } from './style';

const items = [
    {
        name: "국밥",
        src: require('../../img/GukBob.jpg').default
    },
    {
        name: "햄버거",
        src: require('../../img/Hamburger.jpg').default
    },
    {
        name: "피자",
        src: require('../../img/Pizza.jpg').default
    },
    {
        name: "초밥",
        src: require('../../img/Sushi.jpg').default
    },
];

const Game = () => {
    const [foods, setFoods] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        items.sort(() => Math.random() - 0.5);
        setFoods(items);
        setDisplays([items[0], items[1]]);
    }, []);

    const clickHandler = food => (event) => {
        if(foods.length <= 2){
            if(winners.length === 0){
                setDisplays([food]);
            } else{
                let updatedFood = [...winners, food];
                setFoods(updatedFood);
                setDisplays([updatedFood[0], updatedFood[1]]);
                setWinners([]);
            }
        } else if(foods.length > 2){
            setWinners([...winners, food]);
            setDisplays([foods[2], foods[3]]);
            setFoods(foods.slice(2));
        }
    };

    return <FlexBox>
        <h1 className="title">Favorite WorldCup</h1>
        {displays.map(item => {
            return <div
                className="flex-1"
                key={item.name}
                onClick={clickHandler(item)}
                >
                <img className="food-img" src={item.src} alt="food"/>
                <div className="name">{item.name}</div>
            </div>
        })}
    </FlexBox>;
}

export default Game;