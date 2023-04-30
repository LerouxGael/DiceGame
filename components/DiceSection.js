import DiceFace from "./DiceFace";

function DiceSection(props){

    const rollDice = () =>{ 
        props.changeDiceValue(Math.floor(Math.random()*6)+1);
    }

    return(
        <div class="text-center col-start-5 col-end-9 md:col-start-6 md:col-end-8">
                <div class=" grid grid-rows-4">
                    <button onClick={rollDice} class='m-auto row-start-2 md:row-start-1'><DiceFace diceValue={props.diceValue}/></button>
                    <div class="row-start-4">
                        <button onClick={rollDice} class="flex items-center m-auto p-3">
                            <img class="w-6 red" src="/arrow-repeat.svg" alt="New Game Icon"/> 
                            <span class="px-4 ">Roll dice</span> 
                        </button>
                        <button class="flex items-center m-auto p-3">
                            <img class="w-6 red" src="/box-arrow-in-down.svg" alt="New Game Icon"/> 
                            <span class="px-4 ">Hold</span> 
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default DiceSection;