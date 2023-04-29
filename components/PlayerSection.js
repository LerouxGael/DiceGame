function PlayerSection({playerNumber}){
    return(
        <div class="text-center  "/* col-start-2 col-end-5 */>
                <div class="grid grid-rows-4 relative">
                    <h2 class="text-l md:text-4xl active-dot row-start-1">{playerNumber}</h2>
                    <p class="text-5xl md:text-7xl  red font-light row-start-2 row-span-2">43</p>
                    <div class="bg-red w-[80px] md:w-[150px] m-auto row-start-4">
                        <h4 class="p-2 text-sm md:text-base">CURRENT</h4>
                        <p class="text-white p-4 text-xl md:text-4xl">11</p>
                    </div>
                </div>
            </div>
    );
}

export default PlayerSection;