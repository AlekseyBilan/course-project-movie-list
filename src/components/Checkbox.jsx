import React from "react";

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isActive: false};
    }

    onClickHendler = () => {
        this.setState({
            isActive : !this.state.isActive,
        })
    }

    render () {
        const text = this.state.isActive ? 'On' : 'Of'
        return (
            <label>
                {text}
                <input type="checkbox" checked={this.state.isActive} onClick={this.onClickHendler.bind(this)}/>
            </label>
        )
    }
}

export default Checkbox;