import DiceFace from "./DiceFace";
import clsx from "clsx";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function DiceSection(props){
    const [isShaking, setIsShaking] = useState(false);

    const animateDice = useAnimation();

    const diceClass = clsx('m-auto row-start-2 md:row-start-1 h-[110px]');

    const rollDice = () =>{ 
        if (!props.gameOver){
        const newDiceValue =Math.floor(Math.random()*6)+1;

        setIsShaking(!isShaking);
        animateDice.start(
            {
                rotate: [0, 360],
                y : [-5, 5, -1, 1- 0],
                x : [4, -4, 2, -2, 0],
                transition : {duration : 0.2, ease : "easeOut"}
            }
        );

        props.changeDiceValue(newDiceValue);

        /* Check if dice is on face 1*/
        if (newDiceValue === 1)
        {
            props.clearCurrent();
            props.togglePlayer();
        }
        else{  
            props.changeCurrent(newDiceValue);     
        }
    }
}
const hold = () => {


    if (!props.gameOver){
    const value = props.playerCurrentValue;
    const global=props.playerGlobalValue + value;

   

    /* CHECK FOR WINNER*/
    if(global >= 100){
        props.changeGlobal(value);
        props.clearCurrent();
        props.changeGameOver(true);
    }
    else{
        console.log('animate is set to')
        props.changeGlobal(value);
        props.clearCurrent();
        //switching toggle to the useEffect in Sectionlayout
        /* props.togglePlayer(); */

        //setting animate to true to trigger animation in PlayerSection
        props.changeAnimate(true);
    };
}
    
};
    return(
        <div className="text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8">
                <div className="grid grid-rows-4 relative">
                    <div className={diceClass}>
                        <motion.button 
                        animate={animateDice}/* {{rotate: isShaking ? 0 : 360 , x : [2,-2,2,-2,0]}} */ 
                        /* transition={{type : "spring", duration : 0.3}} */
                        onClick={rollDice} className=''/* 'm-auto row-start-2 md:row-start-1' */><DiceFace diceValue={props.diceValue}/></motion.button>
                    </div>
                    <div className="row-start-4">
                        <button onClick={rollDice} className="flex items-center m-auto p-3">
                            <img className="w-6 red" src="/arrow-repeat.svg" alt="New Game Icon"/> 
                            <span className="px-4 ">Roll dice</span> 
                        </button>
                        <button onClick={hold} className="flex items-center m-auto p-3">
                            <img className="w-6 red" src="/box-arrow-in-down.svg" alt="New Game Icon"/> 
                            <span className="px-4 ">Hold</span> 
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default DiceSection;