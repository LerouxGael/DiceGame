import MyHead from "../components/MyHead"
import Header from "../components/Header"
import SectionLayout from "../components/SectionLayout"
import { useState } from "react"



function HomePage() {
const [diceValue, setDiceValue]= useState();
const changeDiceValue = (result) => {
    setDiceValue(result);
}

    return (
        <>
         <MyHead>
                    /* Todo : add icon */
        </MyHead> 
        <div class="p-4 radial-bg min-h-screen">
            
            <div class="text-lg bg-white bg-active-player-1 font-Lato min-h-[calc(100vh-28px)]">
                
                <Header />
                <SectionLayout changeDiceValue={changeDiceValue} diceValue={diceValue}/>
            </div>
        </div>
        
        </>
    )
  }
  
  export default HomePage