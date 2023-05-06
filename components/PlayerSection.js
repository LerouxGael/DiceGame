import clsx from "clsx";
import Winner from "./Winner";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";


function PlayerSection(props){
    
   //check if component is active player
    const [activePlayer, setActivePlayer] = useState(false);
    useEffect(()=>{
        if((props.isPlayerOneActive && props.playerNumber === 'Player 1')||(!props.isPlayerOneActive && props.playerNumber === 'Player 2')){
            setActivePlayer(true);
        }
        else{setActivePlayer(false)}
    },[props.isPlayerOneActive])

    const controls = useAnimation();
    const globalAnim = useAnimation();
    const squareAnime = useAnimation();

    useEffect(()=>{
        if(props.animateCurrent && activePlayer){
            //do animation
            squareAnime.start(
                {
                    scaleX : [0.99, 1],
                    scaleY :  [1.1, 1],
                    transition : {duration : 0.3, ease : "easeOut"}
                }
            );
            globalAnim.start({
                scale : [1.5, 1],
                y : [35, 0] ,
                transition: {duration : 0.3, ease : "easeInOut"}
            });
            controls.start({
                y : [-100, 0],
                transition: {duration: 0.3, ease : "easeOut"},
            });

            //Toggle player
            props.togglePlayer();
            props.changeAnimate(false);
        }
    },[props.animateCurrent]);

    /* Using clsx to apply conditionnal class for red dot on active player */
    const myClass= clsx('text-l md:text-4xl', {
        'active-dot': (props.isPlayerOneActive && props.playerNumber === 'Player 1'  && props.playerGlobal < 100) || (!props.isPlayerOneActive && props.playerNumber  === 'Player 2' && props.playerGlobal < 100)
    });

    return(
        <div className="text-center " /* col-start-2 col-end-5 */>
                <div className="grid grid-rows-4 relative">
                    <div className="row-start-1">
                    {props.playerGlobal >= 100 ? <Winner/> : ''}
                    <h2 className={myClass} >{props.playerNumber}</h2>
                    </div>
                    <motion.div animate={globalAnim} className="text-5xl md:text-7xl  red font-light row-start-2 row-span-2">{props.playerGlobal}</motion.div>
                    <motion.div animate={squareAnime} className="bg-red w-[80px] md:w-[150px] m-auto row-start-4">
                        <h4 className="p-2 text-sm md:text-base">CURRENT</h4>
                        <div className="text-white p-4 text-xl md:text-4xl">
                            <motion.div animate = {controls}>
                            {props.playerCurrent}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
    );
    
}

export default PlayerSection;