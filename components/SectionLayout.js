import PlayerSection from "./PlayerSection";
import DiceSection from "./DiceSection";
import { useState, useEffect } from "react";


const playerOne = 'Player 1';
const playerTwo = 'Player 2';



function SectionLayout(props){

    /* State used to fire animation in PlayerSection if set to true in DiceSection*/
    const [animate, setAnimate]= useState(false);
    const changeAnimate = () => {
        setAnimate(!animate);
    }

    return(
        <section className="grid grid-cols-12 h-full">
            <div className="col-start-2 col-end-5">
            <PlayerSection 
            changeAnimate={changeAnimate}
            animate={animate}
            playerGlobal={props.playerOneGlobal} 
            playerCurrent={props.playerOneCurrent}
            isPlayerOneActive={props.isPlayerOneActive} 
            playerNumber={playerOne} 
            ></PlayerSection>
            </div>
            <DiceSection 
            animate={animate}
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
            changeAnimate={changeAnimate}
            animate={animate}
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