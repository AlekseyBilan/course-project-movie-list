import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledButton = styled.button`
    color: #000;
    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid #443c3e;
    border-radius: 3px;
    background-color: #b1e8ad;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 600;

    :hover {
        border-color: #1d1c50;
        background-color: #caf6f8;
        cursor: pointer;
        text-shadow: 0px 0px 2px #6eff00;
    }
`;

const Button = ({ text, onClick, type, disabled, cName }) => (
    <StyledButton
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cName}
    >
        {text}
    </StyledButton>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    cName: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;