import "./paymentPage.css";
import {  useState } from "react";
import { Button } from "@material-ui/core";
import store from "../../redux/store";
import { useHistory } from "react-router";
import { purchaseCouponAxios } from "../../axios/CustomerAxiosService";

interface GetCoupon {
    id: string;
}



function PaymentPage(props: GetCoupon): JSX.Element {
    console.log(props.id)
    let history = useHistory();
    const couponId = parseInt(props.id.replace(":", ""));
    const myCoupon = store.getState().CouponsState.allCoupons.find(CouponDetails => CouponDetails.id == couponId);
    const [buy, setBuy] = useState<boolean>(false);

    async function purchase() {
        if (store.getState().authState.userDetails.clientType == "Customers") {
            await purchaseCouponAxios(myCoupon);
        }
        else {
            setBuy(true);
        }
    }

    function login() {
        history.push("/login")
    }

    function showLogin() {
        if (buy) {
            return <div>
                log in as client
                <input type="button" value="LOGIN" onClick={login} />
            </div>

        }
    }
    return (
        <div className="purchaseCoupon">
            <h2> enter credit card details:</h2>
            number:_________________
            cvv:_________
            exp:___ ___
            name:________
            <br /><br />
            <Button type="submit" color="primary" variant="contained" onClick={purchase}> I want to buy it!! </Button>
             
            {showLogin()}
        </div>
    );
}

export default PaymentPage;