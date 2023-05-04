import clsx from "clsx";
import Winner from "./Winner";
import { useState } from "react";


function PlayerSection(props){
    
   //check if component is active player
    /* const [activePlayer, setActivePlayer] = useState(false) */


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
                    <p className="text-5xl md:text-7xl  red font-light row-start-2 row-span-2">{props.playerGlobal}</p>
                    <div className="bg-red w-[80px] md:w-[150px] m-auto row-start-4">
                        <h4 className="p-2 text-sm md:text-base">CURRENT</h4>
                        <div className="text-white p-4 text-xl md:text-4xl">
                            <div >
                            {props.playerCurrent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
    
}

export default PlayerSection;