import React from "react";


function CarList(props){
    return <>
    <li>I have a {props.brand}.</li>
    </>
}

function Garage(){
    const car_list = ["Audi", "Bugatti", "Mustang", "Ferrari", "BMW"]
    return <>
    <h2>My Car List</h2>
        <ul>
            {car_list.map((car) => <CarList brand={car} />)}
        </ul>
    </>
}

export {
    Garage
}