
import { useEffect } from "react";
import { getAllCoupons } from "../../axios/GuestAxiosService";
import ViewCouponsSmall from "../../coupons/viewCouponsSmall/viewCouponsSmall";
import { couponsForViewAction } from "../../redux/couponsState";
import store from "../../redux/store";
import "./getCoupons.css";


function GetCoupons(): JSX.Element {

    useEffect(() => {
        syncSetData();
    }, []);

    async function syncSetData() {
        await getAllCoupons();
        store.dispatch(couponsForViewAction(store.getState().CouponsState.allCoupons))
    }


    return (
        <div className="getCoupons">
            <ViewCouponsSmall />

        </div>
    );
}

export default GetCoupons;


