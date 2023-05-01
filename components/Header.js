import Image from "next/image";

function Header(props){
    return (
        <header className="flex justify-center py-14">
            <button onClick={props.reset} className="flex items-center">
                <img className="w-6 red" src="/plus-circle.svg" alt="New Game Icon"/> 
                <span className="px-4">New Game</span> 
            </button>
        </header>
    );
};

export default Header;