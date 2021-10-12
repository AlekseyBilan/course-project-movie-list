import React, {useState} from "react";
import Button from "../Button/Button";

function UseState() {
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
        <h1>useState example</h1>
        <b>{state}</b><br/>
        {obj.title}<br/>    
        <Button onClick={increment} text={'Plus +'} />
        <Button onClick={increment10} text={'Plus 10 +'} />
        <Button onClick={decrement} text={'Minus 1 -'} />
        <Button onClick={changeTitle} text={'Change title'} />
    </>
    )
    
}

export default UseState;