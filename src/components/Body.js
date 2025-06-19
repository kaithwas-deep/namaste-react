import resList from "../utils/mockData";
import ResCard from "./ResCard";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfItems, setListOfItems] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // console.log("useEffect called()");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfItems(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // if(listOfRestaurants.length === 0){
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false){
        return (
            <h1>Looks like you are offline!! Please check your internet connection</h1>
        )
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-bar">
                <div className="search-bar">
                    <input type="text" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="search-btn" onClick={() => {
                        console.log(searchText)
                        // setListOfRestaurants(listOfItems);
                        const filterItems = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfItems(filterItems);    
                        console.log(filterItems);
                        // console.log(listOfRestaurants);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredItems = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4)
                    setListOfItems(filteredItems);
                    console.log(filteredItems);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfItems.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><ResCard resData={restaurant} /></Link>
                    ))
                }
            </div>
        </div>
    )
};