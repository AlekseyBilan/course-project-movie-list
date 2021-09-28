import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: this.props.isActive,
        };
    }

    onClickHendler = () => {
        this.setState(function (state){
            if(!state.isActive) {
                this.props.checkedHandler(!state.isActive);
            }
            return {isActive : !state.isActive}
        })
    }

    render () {
        const text = this.state.isActive ? 'On' : 'Of'
        return (
            <label>
                {text}
                <input 
                    type="checkbox" 
                    checked={this.state.isActive}
                    onClick={this.onClickHendler.bind(this)
                }/>
            </label>
        )
    }
}

export default Checkbox;