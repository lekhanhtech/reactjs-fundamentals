import React from 'react';
import CustomTextInput from './CustomTextInput';

export default class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
  
    componentDidMount() {
        this.textInput.current.focus();
    }
  
    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}