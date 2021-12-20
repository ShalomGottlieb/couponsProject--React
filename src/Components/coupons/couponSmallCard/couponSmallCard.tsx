import { useHistory } from "react-router-dom";
import "./couponSmallCard.css";
import store from "../../redux/store";

interface CouponSmallCard {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

function CouponSmallCard(props: CouponSmallCard): JSX.Element {
    let history = useHistory();
    let type = store.getState().authState.userDetails.clientType
    console.log("in small card")
    console.log(store.getState().CouponsState.allCoupons)



    function moreInfo() {
        if (type === "") {
            history.push("/coupon/getOne/:" + props.id)
        }
        else {
            history.push("/private/screen/coupon/getOne/:" + props.id)
        }
    }

    function deleteCoupon() {
        history.push("/private/screen/company/coupon/delete/:" + props.id)
    }

    function updateCoupon() {
        history.push("/private/screen/company/coupon/update/:" + props.id)
    }

    function purchaseCoupon() {
        if (type === "") {
            history.push("/coupon/payment/:" + props.id)
        }
        else {
            history.push("/private/screen/customer/coupon/payment/:" + props.id)
        }
    }

    const edit = <div>
        <input type="button" value="Update Coupon" onClick={updateCoupon} />
        <br /><br />
        <input type="button" value="Delete Coupon" onClick={deleteCoupon} />
        <br /><br />
    </div>

    const purchase =
        <div>
            <input type="button" value="purchase Coupon" onClick={purchaseCoupon} />
            <br /><br />
        </div>


    return (
        <div className="CouponSmallCard smallBox">
            <img src={props.image}></img>
            {((type!="Customers")&&(history.location.pathname != "/guest/main"))&& props.id} <br />
            {props.title} <br />
            {props.description}{"  "} 
            {props.price} $ <br />
            {((type != "Companies" && type != "Administrator") && (history.location.pathname != "/private/screen/customer/coupons") ||  
            (history.location.pathname === "/guest/main")) && purchase}
            <input type="button" value="See More Information" onClick={moreInfo} />
            {(type === "Companies" && history.location.pathname != "/guest/main") && edit}
        </div>
    );
}

export default CouponSmallCard;
