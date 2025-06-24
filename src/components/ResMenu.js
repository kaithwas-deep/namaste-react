import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {RES_MENU_API} from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResMenuCategory from "./ResMenuCategory";


const ResMenu = () => {
    const {resId} = useParams();    
    const {resInfoItems, resInfo} = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);
    
    if(resInfoItems.length === 0){
        return <Shimmer />;
    }
    const {info} = resInfo?.card?.card;
    
    return (
        <div className="">
            <div className="shadow text-center">
                <h1 className="font-bold text-2xl my-2">{info.name} - {info.avgRatingString}*</h1>
                <h2 className="font-bold text-xl pb-2 mb-5">{info.cuisines.join(",")} - {info.costForTwoMessage}</h2>
            </div>
            {
                resInfoItems.map((item,index) => <ResMenuCategory key={index} item={item} showItems={index===showIndex ? true : false} setShowIndex={() => setShowIndex(index)} />)
                // resInfoItems.map((item, index) => {
                //     const {card} = item?.card;
                //     const {itemCards} = card;
                //     const cardCount = itemCards?.length || 0;
                //     return (
                //         <div key={index} className="res-menu">
                //             <h3>{card?.title}({cardCount})</h3>
                //             {itemCards?.map((itemCard,key) => {
                //                 const {info} = itemCard?.card;
                //                 return (
                //                     <div key={key} className="res-menu-item">
                //                         <h5>{info.name} - Rs{info?.price/100}</h5>
                //                         <h6>{info.isVeg==1 ? "Pure Veg" : "Non Veg"}</h6>
                //                     </div>
                //                 )
                //             })}
                //         </div>
                //     )    
                // })
            }
        </div>
    )
}

export default ResMenu;