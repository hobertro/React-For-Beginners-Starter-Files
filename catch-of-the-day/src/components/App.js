import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";


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
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  addToOrder = (key) => {
    // 1. take a copy of state
    const order = { ...this.state.order }
    // 2. Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update our state object
    this.setState({ order });
  }
  render() {
    return ( 
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            { Object.keys(this.state.fishes).map(key => (
              <Fish details={this.state.fishes[key]} key={key} index={key} addToOrder={this.addToOrder}>{ key }e</Fish>
            ))}
          </ul>
        </div>
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
        <Order fishes={this.state.fishes} order={this.state.order} />
      </div>
    )
  }
}

export default App;