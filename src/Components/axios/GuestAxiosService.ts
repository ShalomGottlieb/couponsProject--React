import axios from "axios";
import { couponsDownloadedAction } from "../redux/couponsState";
import store from "../redux/store";
import globals from "../utils/Globals";

export async function getAllCoupons() {
    await axios.post(globals.urls.guest + "coupons/get")
        .then(res => {
            console.log("new data:\n" + res);
            store.dispatch(couponsDownloadedAction(res.data))
        })
        .catch(err => {
            console.log(err);
        });
}

