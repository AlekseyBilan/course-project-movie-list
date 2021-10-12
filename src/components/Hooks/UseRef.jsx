import React, {useRef, useEffect, useState} from "react";

function UseRef() {
    const [inputText, setInputText] = useState('');
    const [value, setValue] = useState('');
    const inputEl = useRef(null);
    const prevVal = useRef('');

    useEffect(()=>{
        console.log('inputEl = ', inputEl.current);
    }, [inputText]);
    
    useEffect(()=>{
        prevVal.current = value;
    }, [value]);
    
    const setInputTextHendler = (e) => {
        setInputText(() => {
            return e.target.value;
        })  
    }

    return (
    <>
        <h1>UseRef</h1>
        <h2>{value}</h2>
        <input 
            type="text" 
            placeholder="123"
            onChange={ e => setValue(e.target.value) } 
            value={value}
        />
        <input type="text" ref={inputEl} onChange={setInputTextHendler}/>
        <input type="text" placeholder="456"/>
        <button onClick={()=> {inputEl.current.focus()}}>
                Focus to the middle input
        </button>
    </>
    )
}

export default UseRef;