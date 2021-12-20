import { useEffect } from "react";
import ViewCouponsSmall from "../../coupons/viewCouponsSmall/viewCouponsSmall";
import { couponsForViewAction } from "../../redux/couponsState";
import store from "../../redux/store";
import "./privateMain.css";

function PrivateMain(): JSX.Element {
    useEffect(() => {
        store.dispatch(couponsForViewAction(store.getState().CouponsState.allCoupons))
        console.log("in main")
    }
        , []);


    switch (store.getState().authState.userDetails.clientType) {
        case "Administrator":
            return (
                <div className="privateMain">

                    Wellcom Admin <br /><br />
                    what wold you like to do?


                </div>
            );
            break;

        case "Companies":
            return (
                <div className="privateMain">

                    Wellcom Company <br /><br />
                    what wold you like to do?

                </div>
            );
            break;

        case "Customers":
            return (
                <div className="privateMain">
                    wellcome customer

                    <ViewCouponsSmall />

                </div>
            );
            break;

        default:
            return (
                <div>
                </div>

            )
    }

}

export default PrivateMain;
