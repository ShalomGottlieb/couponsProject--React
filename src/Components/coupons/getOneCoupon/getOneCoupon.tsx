import "./getOneCoupon.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import CouponCard from "../couponCard/couponCard";
import store from "../../redux/store";
import CouponDetails from "../../model/CouponDetails";


interface GetOneId {
    id: string;
}

function GetOneCoupon(props: GetOneId): JSX.Element {

    const [Coupon1, setData] = useState(new CouponDetails());
    const propId = parseInt(props.id.replace(":", ""));

    useEffect(() => {
        console.log("in get one coupon")
        setData(store.getState().CouponsState.allCoupons.find(coupon => coupon.id == propId));
    }, []);

    let history = useHistory();

    return (
        <div className="getOneCoupon">
            <h2>Coupon #{props.id} details</h2><br />
            <div className="center">
                <CouponCard
                    id={Coupon1.id}
                    companyID={Coupon1.companyID}
                    categoryID={Coupon1.categoryID}
                    title={Coupon1.title}
                    startDate={Coupon1.startDate.toString()}
                    endDate={Coupon1.endDate.toString()}
                    description={Coupon1.description}
                    amount={Coupon1.amount}
                    price={Coupon1.price}
                    image={Coupon1.image} />
            </div>
            <input type="button" value="back" onClick={() => history.go(-1)} />

        </div>
    );
}

export default GetOneCoupon;
