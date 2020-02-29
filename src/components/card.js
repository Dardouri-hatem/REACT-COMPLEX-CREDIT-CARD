import React from "react";
import InputMask from "react-input-mask";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CompanyName: "Company Name",
      CartNumber: "•••• •••• •••• ••••",
      Name: "Your NAME",
      cardStyle: "Default",
      day: "•• ",
      month: " •• "
    };
  }
  handleNumberChange = e => {
    let text = e.target.value;
    let initial = "•••• •••• •••• ••••";
    let number_card;
    if (text.length === 0) {
      this.setState({
        CartNumber: initial
      });
    } else {
      number_card = initial.slice(text.length - 1);

      this.setState({
        CartNumber: e.target.value + number_card
      });
    }
  };
  handleNameChange = e => {
    let name = e.target.value;
    if (e.target.value.match(/[0-9]/g)) {
      e.target.value = name.slice(0, name.length - 1);
    }
    this.setState({
      Name: e.target.value.toUpperCase()
    });
    if (e.target.value === "") {
      this.setState({
        Name: "Your NAME"
      });
    }
  };
  handleExpiryChange = e => {
    let date = e.target.value;
    if (date.slice(0, 2) > 12) {
      e.target.value = 1;
    }
    if (date.slice(0, 2) < 13) {
      this.setState({
        day: date.slice(0, 2),
        month: date.slice(2)
      });
    }
    if (e.target.value === "") {
      this.setState({
        day: "•• ",
        month: " •• "
      });
    }
  };
  render() {
    return (
      <div className="container PaymentForm">
        <div className={this.state.cardStyle}>
          <img
            className="logoMasterCard"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png"
            alt="mastercardlogo"
          ></img>
          <h2 className="Company-name">{this.state.CompanyName}</h2>
          <br></br> <br></br>
          <h2>{this.state.CartNumber}</h2>
          <h6 id="expiration">
            valid thru
            <br />
            {this.state.day}/{this.state.month}
          </h6>
          <h3>{this.state.Name}</h3>
        </div>

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

export default Card;
