import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {RES_MENU_API} from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const ResMenu = () => {
    const {resId} = useParams();    
    const {resInfoItems, resInfo} = useRestaurantMenu(resId);
    
    if(resInfoItems.length === 0){
        return <Shimmer />;
    }
    const {info} = resInfo?.card?.card;
    
    return (
        <div className="res-info">
            <h1>{info.name} - {info.costForTwoMessage}({info.avgRatingString} stars)</h1>
            {
                resInfoItems.map((item, index) => {
                    const {card} = item?.card;
                    const {itemCards} = card;
                    const cardCount = itemCards?.length || 0;
                    return (
                        <div key={index} className="res-menu">
                            <h3>{card?.title}({cardCount})</h3>
                            {itemCards?.map((itemCard,key) => {
                                const {info} = itemCard?.card;
                                return (
                                    <div key={key} className="res-menu-item">
                                        <h5>{info.name} - Rs{info?.price/100}</h5>
                                        <h6>{info.isVeg==1 ? "Pure Veg" : "Non Veg"}</h6>
                                    </div>
                                )
                            })}
                        </div>
                    )    
                })
            }
        </div>
    )
}

export default ResMenu;