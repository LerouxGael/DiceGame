import MyHead from "../components/MyHead"
import Header from "../components/Header"
import SectionLayout from "../components/SectionLayout"
import { useState } from "react"
import clsx from "clsx"



function HomePage() {

    
    /* dice value is set as state and prop drilled to components */
    const [diceValue, setDiceValue]= useState();
    const changeDiceValue = (result) => {
        setDiceValue(result);
    };

    /* Boolean defines if player 1 is active to toggle players*/
    const [isPlayerOneActive, setIsPlayerOneActive]= useState(true);
    const togglePlayer= () => {
        if (isPlayerOneActive) {
            setIsPlayerOneActive(false);
        }
        else {
            setIsPlayerOneActive(true);
        };
    };

    /* Toggle bg on active player */ 
    const myClass= clsx('text-lg bg-white font-Lato min-h-[calc(100vh-28px)]',  {
        'bg-active-player-1': isPlayerOneActive, 'bg-active-player-2' : !isPlayerOneActive } 
    );

    /* Players global and current scores are stored in state*/
    const [playerOneGlobal, setPlayerOneGlobal]= useState(0);
    const [playerTwoGlobal, setPlayerTwoGlobal]= useState(0);

    const [playerOneCurrent, setPlayerOneCurrent] = useState(0);
    const [playerTwoCurrent, setPlayerTwoCurrent] = useState(0);

    /* Fonctions to change global scores from children*/
    const changePlayerOneGlobal = (scoreUpdate) => {
        setPlayerOneGlobal(playerOneGlobal+scoreUpdate);
    };
    const changePlayerTwoGlobal = (scoreUpdate) => {
        setPlayerTwoGlobal(playerTwoGlobal+scoreUpdate);
    };
    const clearGlobals = ()=> {
        setPlayerOneGlobal(0);
        setPlayerTwoGlobal(0);
    }

    /* Functions to change players current scores from children*/
    const changePlayerOneCurrent = (scoreUpdate) => {
        setPlayerOneCurrent(playerOneCurrent+scoreUpdate);
    };
    const clearPlayerOneCurrent = () => {
        setPlayerOneCurrent (0);
    }
    const clearPlayerTwoCurrent = () => {
        setPlayerTwoCurrent (0);
    }
    const changePlayerTwoCurrent = (scoreUpdate) => {
        setPlayerTwoCurrent(playerTwoCurrent+scoreUpdate);
    };
    
    const reset =() => {
        clearPlayerOneCurrent();
        clearPlayerTwoCurrent();
        clearGlobals();
        setIsPlayerOneActive(true);
    };

    return (
        <>
         <MyHead >
                    /* Todo : add icon */
        </MyHead> 
        <div className="p-4 radial-bg min-h-screen">
            
            <div className={myClass}>
                
                <Header reset={reset}/>
                <SectionLayout 
                isPlayerOneActive={isPlayerOneActive} 
                togglePlayer={togglePlayer} 
                changeDiceValue={changeDiceValue} 
                diceValue={diceValue}
                playerOneGlobal={playerOneGlobal}
                playerTwoGlobal={playerTwoGlobal}
                playerOneCurrent={playerOneCurrent}
                playerTwoCurrent={playerTwoCurrent}
                changeGlobal={isPlayerOneActive ? changePlayerOneGlobal : changePlayerTwoGlobal}
                changeCurrent={isPlayerOneActive ? changePlayerOneCurrent : changePlayerTwoCurrent}
                reset={reset}
                
                clearCurrent={isPlayerOneActive ? clearPlayerOneCurrent : clearPlayerTwoCurrent}
                />
            </div>
        </div>
        </>
        
    )
  }
  
  export default HomePage