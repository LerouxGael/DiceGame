import DiceFace from "./DiceFace";

function DiceSection(props){

    const rollDice = () =>{ 
        
        const newDiceValue =Math.floor(Math.random()*6)+1;
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
const hold = () => {
    const value = props.playerCurrentValue;
    const global=props.playerGlobalValue + value;

    /* CHECK FOR WINNER*/
    if(global >= 100){
        props.changeGlobal(value);
        props.clearCurrent();
    }
    else{
        props.changeGlobal(value);
        props.clearCurrent();
        props.togglePlayer();
    };
    
};
    return(
        <div className="text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8">
                <div className=" grid grid-rows-4">
                    <button onClick={rollDice} className='m-auto row-start-2 md:row-start-1'><DiceFace diceValue={props.diceValue}/></button>
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