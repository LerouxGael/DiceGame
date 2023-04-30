import clsx from "clsx";

function PlayerSection(props){
    
   
    /* Using clsx to apply conditionnal class for red dot on active player */
    const myClass= clsx('text-l md:text-4xl  row-start-1', {
        'active-dot': (props.isPlayerOneActive && props.playerNumber === 'Player 1') || (!props.isPlayerOneActive && props.playerNumber === 'Player 2')
    });
    
    return(
        <div className="text-center"/* col-start-2 col-end-5 */>
                <div className="grid grid-rows-4 relative">
                    <h2 className={myClass} >{props.playerNumber}</h2>
                    <p className="text-5xl md:text-7xl  red font-light row-start-2 row-span-2">{props.playerGlobal}</p>
                    <div className="bg-red w-[80px] md:w-[150px] m-auto row-start-4">
                        <h4 className="p-2 text-sm md:text-base">CURRENT</h4>
                        <p className="text-white p-4 text-xl md:text-4xl">{props.playerCurrent}</p>
                    </div>
                </div>
            </div>
            
    );
    
}

export default PlayerSection;