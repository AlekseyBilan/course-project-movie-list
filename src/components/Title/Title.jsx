import React from 'react';

function Title(props) {
    const {titleText} = props;
    return (
      <h2 className="Title">
        {titleText}
      </h2>
    );
  }
  
export default Title;