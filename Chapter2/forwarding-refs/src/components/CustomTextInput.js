import React from 'react';
const CustomTextInput = React.forwardRef(
    function myFunction(props, ref) {
        return (
            <input
                type="text"
                ref={ref} />
        )
});

export default CustomTextInput;