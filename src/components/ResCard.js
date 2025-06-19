import {STORE_IMG_URL} from "../utils/constants";

const ResCard = (props) => {
    const {info} = props.resData;
    const {cloudinaryImageId, name, cuisines, avgRating, sla, veg} = info;
    return (
        <div className="res-card">
            <img className="res-card-img" src={STORE_IMG_URL+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{veg ? "Pure Veg" : "Non Veg"}</h5>
            <h6>{cuisines.join(", ")}</h6>
            <h5>{avgRating} stars</h5><h5>{sla.slaString}</h5>
        </div>
    )
}

export default ResCard;