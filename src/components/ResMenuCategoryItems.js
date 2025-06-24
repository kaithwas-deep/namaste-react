import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ResMenuCategoryItems = ({item}) => {
    const {info} = item.card;
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // console.log("clicked")
        dispatch(addItem(item));
    }
    // console.log(item);
    return (
        <div data-testid="resMenuCardItem" className="border-b-1 m-2 border-gray-300 flex">
            <div className="w-10/12">
                <div className="font-bold">{info.name} - ₹{info.price/100}</div>
                <div className="font-bold text-xs text-gray-700 my-2">{info.description}</div>
            </div>
            <div className="w-2/12 text-right">
                <button className="bg-gray-700 font-bold text-white text-lg p-2 rounded-lg cursor-pointer" onClick={() =>handleAddItem(item)}>Add +</button>
            </div>
        </div>
    )

}

export default ResMenuCategoryItems;