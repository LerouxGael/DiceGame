import PlayerSection from "./PlayerSection";
import DiceSection from "./DiceSection";

const playerOne = 'Player 1';
const playerTwo = 'Player 2';

function SectionLayout(){
    return(
        <section class="grid grid-cols-12 h-full">
            <div class="col-start-2 col-end-5">
            <PlayerSection playerNumber={playerOne} ></PlayerSection>
            </div>
            <DiceSection></DiceSection>
            <div class="col-start-9 col-end-11"> 
            <PlayerSection playerNumber={playerTwo} ></PlayerSection>
            </div>
            
        </section>
    );
}

export default SectionLayout;