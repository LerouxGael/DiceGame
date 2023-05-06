import Image from "next/image";
import { motion } from "framer-motion";

function DiceFace(props){

    switch (props.diceValue){
        case 1 :
    return (
        <div className="dice first-face ">
                        <motion.div animate={{scale : [1.3, 1.5, 0.8, 1], transition:{duration : 0.3, ease : "easeOut"}, rotate : [ -50, 10, 0] }}>
                            <Image src='/skull.svg' alt='skull' width={104} height={104}/>
                        </motion.div>
        </div>
    );
    case 2:
        return (
            <div className="dice second-face ">
                <div className="dot"> </div>
                <div className="dot"> </div>
            </div>
        );

    case 3:
        return(
                <div className="dice third-face ">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            );
    case 4:
            return(
                <div className="fourth-face dice ">
                    <div className="column">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <div className="column">
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            );
    case 5:
        return(
            <div className="fifth-face dice ">
  
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                
                <div className="column">
                    <div className="dot"></div>
                </div>
                
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

            </div>
        );
    case 6:
        return(
            <div className="sixth-face dice ">
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <div className="column">
                    <div className="dot"></div>
                    <div className="dot"></div>
                        <div className="dot"></div>
                </div>

            </div>
        );
    default :
        return (
            <div className="dice first-face ">
            
            <img src='/skull.svg' alt='skull'></img>
</div>
)
        
    }
}

export default DiceFace;