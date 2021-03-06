import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Burger from "../../components/Burger/Burger.jsx";
import BuildControls from "../../components/Burger/BuildControls/BuildControls.jsx";

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    }
  }
  render() {
    return (
      <div>
        <Aux>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls />
        </Aux>
      </div>
    );
  }
}

export default BurgerBuilder;
