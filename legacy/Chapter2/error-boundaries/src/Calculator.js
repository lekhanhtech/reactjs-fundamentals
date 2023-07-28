import React from 'react'

function devide(numerator, denominator){
    const d = parseFloat(denominator)
    if(d === 0) {
        throw new Error('Devide by zero!');
    }
    return numerator/denominator;
}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            numerator: 0,
            denominator: 1,
            result: 0,
            errorMessage: null, 
        };
        this.onNumeratorChange = this.onNumeratorChange.bind(this);
        this.onDenominatorChange = this.onDenominatorChange.bind(this);
        this.onCalculate = this.onCalculate.bind(this);
    }
    
    onCalculate() {
        const { numerator, denominator } = this.state;
        try {
            const result = devide(numerator, denominator);
            this.setState({result, errorMessage: null});
        } catch (error) {
            this.setState({ errorMessage: error.message });
        }
    }

    onNumeratorChange(event) {
        this.setState({ numerator: event.target.value})
    }

    onDenominatorChange(event) {
        this.setState({ denominator: event.target.value})
    }
    
    render() {
      return (
          <div>
                <label>
                    Numerator:
                    <input type="number" value={this.state.numerator} onChange={this.onNumeratorChange} />
                </label>
                <label>
                    Denominator:
                    <input type="number" value={this.state.denominator} onChange={this.onDenominatorChange} />
                </label>
                <label>Result: {this.state.result} </label>
              
                <button onClick={this.onCalculate}>Calculate</button>
                {
                    this.state.errorMessage
                        ? (
                            <div>
                                <span>{this.state.errorMessage}</span>
                            </div>
                        )
                        : null
                }
          </div>
      )
    }
}