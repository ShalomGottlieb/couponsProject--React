import CouponDetails from "../model/CouponDetails";

export class CouponsState {
    public allCoupons: CouponDetails[] = [];
    public couponsForView: CouponDetails[] = [];
    public cart: CouponDetails[] = [];


}

export enum CouponsActionType {
    CouponsDownload = "CouponsDownloaded",
    CouponsDownloadUpdate = "CouponsDownloadedUpdate",
    CouponsForView = "CouponsForView",
    Cart = "Cart",
}


export interface CouponsAction {
    type: CouponsActionType,
    payload?: any,
}

export function couponsDownloadedAction(coupons: CouponDetails[]): CouponsAction {
    return { type: CouponsActionType.CouponsDownload, payload: coupons }
}

export function couponsDownloadedUpdateAction(func: any): CouponsAction {
    return { type: CouponsActionType.CouponsDownloadUpdate, payload: func }
}

export function couponsForViewAction(coupons: CouponDetails[]): CouponsAction {
    return { type: CouponsActionType.CouponsForView, payload: coupons }
}

export function cartAction(coupons: CouponDetails[]): CouponsAction {
    return { type: CouponsActionType.Cart, payload: coupons }
}

export function couponsReducer(currentState: CouponsState = new CouponsState(), action: CouponsAction): CouponsState {
    const newState = { ...currentState };
    switch (action.type) {
        case CouponsActionType.CouponsDownload:
            newState.allCoupons = action.payload;
            break;
        case CouponsActionType.CouponsDownloadUpdate:
            newState.allCoupons=action.payload;
            break;
        case CouponsActionType.CouponsForView:
            newState.couponsForView = action.payload;
            break;
        case CouponsActionType.Cart:
            newState.cart = action.payload;
    }

    return newState;
}


