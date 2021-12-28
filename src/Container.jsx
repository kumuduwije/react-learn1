import React from "react";
import "./App.css"
import "w3-css/w3.css"

function Container(){
    return <>
        <div className="w3-container w3-teal" >
            <h2>Sri Lanka</h2>
            <p>Sri Lanka is located in Indian ocean.
                It is a beautiful and small country.There are many places to visit in Sri Lanka.</p>
        </div>
    </>
}


function Container2(props){
    return <>
        <div className={"w3-container w3-yellow"}>
            <h2>{props.country}</h2>
            <p>{props.desc}</p>
        </div>
    </>
}

function ButtonTest(props){
    function MissedGoal(){

        return <h2>You Missed Goal</h2>
    }
    function MadeGoal(){
        return <h2>You made a Goal</h2>
    }
    const goalStatus = props.goalStatus

    return (

        // returning as a ternary operator
        <>
            {goalStatus ? <MadeGoal/> :<MissedGoal/>}
        </>
    )



}

export {
    Container,
    Container2,
    ButtonTest
}