import PlayerSection from "./PlayerSection";
import DiceSection from "./DiceSection";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


const playerOne = 'Player 1';
const playerTwo = 'Player 2';



function SectionLayout(props){

    /* State used to fire animation in PlayerSection if set to true in DiceSection*/
    const [animateCurrent, setAnimateCurrent]= useState(false);
    const changeAnimate = (bool) => {
        setAnimateCurrent(bool);
    }



    return(
        <section className="grid grid-cols-12 h-full">
            <div className="col-start-2 col-end-5">
            <PlayerSection 
            togglePlayer={props.togglePlayer}
            changeAnimate={changeAnimate}
            animateCurrent={animateCurrent}
            playerGlobal={props.playerOneGlobal} 
            playerCurrent={props.playerOneCurrent}
            isPlayerOneActive={props.isPlayerOneActive} 
            playerNumber={playerOne} 
            ></PlayerSection>
            </div>
            <DiceSection 
            animateCurrent={animateCurrent}
            changeAnimate = {changeAnimate}
            gameOver={props.gameOver}
            changeGameOver={props.changeGameOver}
            reset={props.reset}
            clearCurrent = {props.clearCurrent} 
            changeGlobal={props.changeGlobal} 
            changeCurrent={props.changeCurrent} 
            diceValue={props.diceValue} 
            changeDiceValue={props.changeDiceValue}
            isPlayerOneActive={props.isPlayerOneActive}
            togglePlayer={props.togglePlayer}
            playerGlobalValue={props.isPlayerOneActive ? props.playerOneGlobal : props.playerTwoGlobal}
            playerCurrentValue = {props.isPlayerOneActive ? props.playerOneCurrent : props.playerTwoCurrent}
            ></DiceSection>
            <div className="col-start-9 col-end-11"> 
            <PlayerSection
            togglePlayer={props.togglePlayer}
            changeAnimate={changeAnimate}
            animateCurrent={animateCurrent}
            playerGlobal={props.playerTwoGlobal} 
            playerCurrent={props.playerTwoCurrent}
            isPlayerOneActive={props.isPlayerOneActive} 
            playerNumber={playerTwo} 
            ></PlayerSection>
            </div>
        </section>
    );
}

export default SectionLayout;