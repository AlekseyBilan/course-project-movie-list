import React, {useRef} from 'react';

function Test() {
    const title = useRef(null);
    return (
        <h2 ref={title} onClick={()=>{console.log('TC = ', title?.current)}}>
            {'test test test'}
        </h2>
    );
}
  
export default Test;