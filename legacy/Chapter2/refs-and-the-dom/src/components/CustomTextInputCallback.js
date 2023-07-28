import React from 'react';

class CustomTextInputCallback extends React.Component {
    constructor(props) {
      super(props);
  
      this.textInput = null;
  
      this.setTextInputRef = element => {
        this.textInput = element;
      };
  
      this.focusTextInput = () => {
        // Focus the text input using the raw DOM API
        if (this.textInput) this.textInput.focus();
      };
    }
  
    componentDidMount() {
      // autofocus the input on mount
      this.focusTextInput();
    }
  
    render() {
      // Use the `ref` callback to store a reference to the text input DOM
      // element in an instance field (for example, this.textInput).
      return (
        <div>
          <input
            type="text"
            ref={this.setTextInputRef}
          />
          <input
            type="button"
            value="Focus the text input"
            onClick={this.focusTextInput}
          />
        </div>
      );
    }
}

export default CustomTextInputCallback;