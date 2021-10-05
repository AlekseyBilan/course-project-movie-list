import React, {useState} from "react";

function Checkbox(props) {
    const [state, setState ] = useState(props.isChecked);

    const onChangeHendler = () => {
        setState(function (state){
            if(!state) {
                props.checkedHandler(!state);
            }
            return !state
        })
    }
        const text = state ? 'On' : 'Of'
        return (
            <label>
                {text}
                <input 
                    type="checkbox"
                    checked={state}
                    onChange={onChangeHendler}
                />
            </label>
        )
    
}

export default Checkbox;