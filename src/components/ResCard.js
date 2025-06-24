import {STORE_IMG_URL} from "../utils/constants";

const ResCard = (props) => {
    const {info} = props.resData;
    const {cloudinaryImageId, name, cuisines, avgRating, sla, veg} = info;
    return (
        <div data-testid="resCard" className="w-[220px] m-4 bg-gray-100 hover:bg-gray-200">
            <div className="m-3 w-[200px]">
                <img className="rounded-md" src={STORE_IMG_URL+cloudinaryImageId} />
                <h3 className="font-bold text-lg">{name}</h3>
                <h5 className="font-bold text-md">{veg ? "Pure Veg" : "Non Veg"}</h5>
                <h6 className="font-semibold text-sm">{cuisines.join(", ")}</h6>
                <h5><span className="font-semibold text-sm">{avgRating}</span> stars</h5><h5><span className="font-semibold text-sm">{sla.slaString}</span></h5>
            </div>
        </div>
    )
}

export const withOpenLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white absolute px-2 py-1 m-2 rounded-md">Open</label>
                <ResCard {...props} />
            </div>
        )
    }
}

export const withCloseLabel = (ResCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-red-400 text-white absolute px-2 py-1 m-2 rounded-md">Closed</label>
                <ResCard {...props} />
            </div>
        )
    }
}

export default ResCard;