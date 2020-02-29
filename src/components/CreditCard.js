import React from "react";
import Cards from "react-credit-cards";
import InputMask from "react-input-mask";

export default class PaymentForm extends React.Component {
  state = {
    expiry: "",
    name: "",
    number: ""
  };

  handleNumberChange = e => {
    this.setState({
      number: e.target.value
    });
  };

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };
  handleExpiryChange = e => {
    this.setState({
      expiry: e.target.value
    });
  };

  render() {
    return (
      <div className="PaymentForm">
        <Cards
          expiry={this.state.expiry}
          name={this.state.name}
          number={this.state.number}
          className="card"
        />
        <form className="form-input">
          <label>Number Card : </label>
          <br></br>
          <InputMask
            mask=" 9999 9999 9999 9999"
            maskChar=""
            placeholder="Number Card"
            onChange={this.handleNumberChange}
          />
          <br></br>
          <label>User Name :</label>
          <br></br>

          <InputMask
            maskChar=""
            placeholder="User Name"
            maxLength="20"
            onChange={this.handleNameChange}
          />
          <br></br>

          <label>Expiration date :</label>
          <br></br>
          <InputMask
            mask=""
            maxLength="4"
            placeholder="Expiry date"
            onChange={this.handleExpiryChange}
          />
        </form>
      </div>
    );
  }
}
