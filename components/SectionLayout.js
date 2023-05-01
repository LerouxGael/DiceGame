import PlayerSection from "./PlayerSection";
import DiceSection from "./DiceSection";

const playerOne = 'Player 1';
const playerTwo = 'Player 2';

function SectionLayout(props){
    return(
        <section className="grid grid-cols-12 h-full">
            <div className="col-start-2 col-end-5">
            <PlayerSection 
            playerGlobal={props.playerOneGlobal} 
            playerCurrent={props.playerOneCurrent}
            isPlayerOneActive={props.isPlayerOneActive} 
            playerNumber={playerOne} 
            ></PlayerSection>
            </div>
            <DiceSection 
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