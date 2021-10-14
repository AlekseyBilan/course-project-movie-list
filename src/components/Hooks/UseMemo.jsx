import React, {useState} from "react";
import Button from "../Button/Button";

function UseMemo() {
    const [state, setState ] = useState(0);
    const [obj, setObj ] = useState({title:'title', test:1123});
    
    const increment = () => {
        setState(function (state) {
            return state + 1;
        })
    }

    const increment10 = () => {
        setState(function (state) {
            return state + 10;
        })
    }

    const decrement = () => {
        setState(function (state) {
            return state -1;
        })
    }

    const changeTitle = () => {
        setObj((prevState) => {
            return { ...prevState, title: prevState.title+state}
        })
    }

    return (
    <>
        <h1>UseMemo</h1>
    </>
    )
    
}

export default UseMemo;