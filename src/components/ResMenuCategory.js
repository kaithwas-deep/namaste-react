import ResMenuCategoryItems from "./ResMenuCategoryItems";
import { useState } from "react";

const ResMenuCategory = ({item,showItems,setShowIndex}) => {
    // console.log(item)
    const {title,itemCards} = item?.card?.card;
    const cardCount = itemCards?.length || 0;
    const handleClick = () => {
        console.log("clicked");
        // setShowItems(!showItems);
        setShowIndex();
    }
    return (
        <div data-testid="menuResCategory" className=" w-6/12 mx-auto p-2 my-3 shadow">
            <div className="flex justify-between font-bold text-lg text-gray-500 cursor-pointer" onClick={handleClick}>
                <div>{title}({cardCount})</div>
                <div>&rarr;</div>
            </div>
            <div className="">
                {
                    showItems && itemCards?.map((item,index) => <ResMenuCategoryItems key={index} item={item} />)
                }
            </div>
        </div>
    )
}

export default ResMenuCategory;