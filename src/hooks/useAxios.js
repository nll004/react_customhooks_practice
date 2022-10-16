import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

function useAxios(initialState=[]){
    const [cards, setCards] = useState(initialState);

    async function addCard(url, name){
        let res;
        if(name) res = await axios.get(`${url}/${name}/`);
        else     res = await axios.get(url);
        setCards(cards => [...cards, { ...res.data, id: uuid() }]);
    }
    return [cards, addCard]
}

export default useAxios;
