import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    console.log("Adding a Fish");
    // 3. Set new fishes object to state
    this.setState({
      fishes: fishes
    })
    console.log(this.state);
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Inventory addFish={this.addFish}/>
        <Order />
      </div>
    )
  }
}

export default App;