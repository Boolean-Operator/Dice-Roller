import React, { useState } from 'react';
import Die from './Die';
import './RollDice.css'

function RollDiceHook() {
  const sides = ["one","two","three","four","five","six"];
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);
  const roll = () => {
    setDie1(sides[Math.floor(Math.random()*sides.length)]);
    setDie2(sides[Math.floor(Math.random()*sides.length)]);
    setRolling(true);
    setTimeout(() => {
      setRolling(false);
    }, 1500)
  }
  
  return (
    <div className = "RollDice">
      <div className = "DiceContainer">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling}/>
      </div>
      <button className={rolling ? "rolling" : ""} onClick={roll} disabled={rolling} >
        {rolling ? "Rolling...." : "Roll Dice"}
      </button>
    </div>
  )
}

export default RollDiceHook;