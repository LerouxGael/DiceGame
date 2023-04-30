function DiceFace(props){

    switch (props.diceValue){
        case 1 :
    return (
        <div className="dice first-face ">
                        {/* <span className="dot"> </span> */}
                        <img src='/skull.svg' alt='skull'></img>
        </div>
    );
    case 2:
        return (
            <div className="dice second-face ">
                <span className="dot"> </span>
                <span className="dot"> </span>
            </div>
        );

    case 3:
        return(
                <div className="dice third-face ">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            );
    case 4:
            return(
                <div className="fourth-face dice ">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            );
    case 5:
        return(
            <div className="fifth-face dice ">
  
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                </div>
                
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>

            </div>
        );
    case 6:
        return(
            <div className="sixth-face dice ">
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
                        <span className="dot"></span>
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