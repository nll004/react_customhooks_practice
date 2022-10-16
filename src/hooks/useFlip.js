import { useState } from "react";

function useFlip(initialState = false){
    const [cardFaceUp, setFaceUp] = useState(initialState);

    function flipCard(){
        setFaceUp(state => !state);
    }

    return [cardFaceUp, flipCard]
}

export default useFlip;
