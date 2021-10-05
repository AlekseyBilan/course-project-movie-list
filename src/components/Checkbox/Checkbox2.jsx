import React from "react";

function Checkbox2({isChecked, onChangeHendler}) {
    return (
        <label>
            {isChecked ? 'On' : 'Of'}
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={onChangeHendler}
            />
        </label>
    )
}

export default Checkbox2;