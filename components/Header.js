import Image from "next/image";

function Header(){
    return (
        <header class="flex justify-center py-14">
            <button class="flex items-center">
                <img class="w-6 red" src="/plus-circle.svg" alt="New Game Icon"/> 
                <span class="px-4">New Game</span> 
            </button>
        </header>
    );
};

export default Header;