import { useState, useEffect } from "react";
import {RES_MENU_API} from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfoItems, setResInfoItems] = useState([]);
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(RES_MENU_API+resId);
        const jsonData = await data.json();
        let response = jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        const cards = response.slice(1,response.length);
        console.log(jsonData.data.cards[2]);
        console.log(cards);
        setResInfoItems(cards);
        setResInfo(jsonData?.data?.cards[2]);
    }

    return {resInfoItems, resInfo};
}

export default useRestaurantMenu;