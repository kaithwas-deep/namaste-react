import resList from "../utils/mockData";
import ResCard, { withOpenLabel,withCloseLabel } from "./ResCard";
import {useState,useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [listOfItems, setListOfItems] = useState([]);

    const [searchText, setSearchText] = useState("");
    const ResCardOpened = withOpenLabel(ResCard);
    const ResCardClosed = withCloseLabel(ResCard);

    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        // console.log("useEffect called()");
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();

        // Find the card that contains restaurants
        const restaurantCard = jsonData?.data?.cards.find(
            (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        // console.log(jsonData);
        // setListOfRestaurants(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setListOfItems(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(jsonData.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setListOfRestaurants(restaurants);
        setListOfItems(restaurants);
        // console.log(restaurants);
        
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
            <div className="flex m-4">
                <div className="search-bar">
                    <input data-testid="searchInput" type="text" className="border border-solid border-black shadow mx-2 rounded-lg" name="search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="bg-green-400 mx-2 px-2 py-1 font-bold rounded-lg" onClick={() => {
                        // console.log(searchText)
                        // setListOfRestaurants(listOfItems);
                        const filterItems = listOfRestaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfItems(filterItems);    
                        // console.log(filterItems);
                        // console.log(listOfRestaurants);
                    }}>Search</button>
                </div>
                <button className="bg-gray-400 mx-2 px-2 py-1 font-bold rounded-lg" onClick={() => {
                    const filteredItems = listOfRestaurants.filter((restaurant) => restaurant.info.avgRating > 4.3)
                    setListOfItems(filteredItems);
                    // console.log(filteredItems);
                }}>
                    Top Rated Restaurants
                </button>
                <div className="mx-4">
                    <label>User: </label>
                    <input type="text" className="border px-2 rounded-md" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    listOfItems.map((restaurant) => (
                        <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}
                        >
                            {/* {restaurant.info.isOpen ? <ResCardOpened resData={restaurant} /> : <ResCard resData={restaurant} />} */}
                            {restaurant.info.isOpen ? <ResCardOpened resData={restaurant} /> : <ResCardClosed resData={restaurant} />}
                            
                        </Link>
                    ))
                }
            </div>
        </div>
    )
};