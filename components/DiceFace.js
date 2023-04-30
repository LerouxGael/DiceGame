function DiceFace(props){
    switch (props.diceValue){
        case 1 :
    return (
        <div class="dice first-face m-auto row-start-2 md:row-start-1">
                        <span class="dot"> </span>
        </div>
    );
    case 2:
        return (
            <div class="dice second-face m-auto row-start-2 md:row-start-1">
                <span class="dot"> </span>
                <span class="dot"> </span>
            </div>
        );

    case 3:
        return(
                <div class="dice third-face m-auto row-start-2 md:row-start-1">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            );
    case 4:
            return(
                <div class="fourth-face dice m-auto row-start-2 md:row-start-1">
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="column">
                        <span class="dot"></span>
                        <span class="dot"></span>
                    </div>
                </div>
            );
    case 5:
        return(
            <div class="fifth-face dice m-auto row-start-2 md:row-start-1">
  
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                
                <div class="column">
                    <span class="dot"></span>
                </div>
                
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>

            </div>
        );
    case 6:
        return(
            <div class="sixth-face dice m-auto row-start-2 md:row-start-1">
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                        <span class="dot"></span>
                </div>

            </div>
        );
    default :
        return (<div class="dice first-face m-auto row-start-2 md:row-start-1">
        <span class="dot"> </span>
</div>)
        
    }
}

export default DiceFace;