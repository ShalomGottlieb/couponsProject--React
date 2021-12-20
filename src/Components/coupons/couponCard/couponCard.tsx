import { useEffect, useState } from "react";
import "./couponCard.css";


interface CouponCardProps {
    id: number;
    companyID: number;
    categoryID: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    amount: number;
    price: number;
    image: string;
}


function CouponCard(props: CouponCardProps): JSX.Element {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        setStartDate(formatDate(props.startDate));
        setEndDate(formatDate(props.endDate));
    })

    function formatDate(date: string) {
        var myNewDate = date.split('T')[0].split("-");
        var formattedDate = myNewDate[2] + "/" + myNewDate[1] + "/" + myNewDate[0];
        return formattedDate;
    }

    return (
        <div className="couponCard smallBox">
            <img src={props.image}></img>
            {props.id} <br /><br />
            {props.title}<br />
            {props.companyID}<br />
            {props.categoryID} <br />
            description: {props.description}  <br />
            {props.price} $ <br />
            amount: {props.amount} <br />
            startDate: {startDate}  <br />
            expDate: {endDate} <br />


        </div>

    );
}

export default CouponCard;

