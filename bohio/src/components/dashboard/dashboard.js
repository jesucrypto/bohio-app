import React from 'react';
import Catalog from '../catalog/catalog';
import Checkout from '../checkout/checkout';
import Orders from '../orders/orders';
import Settings from '../settings/settings';
import Logout from '../logout/logout';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen : 'dash'
    }
  }
  render() {
    var currentScreen;
    if (this.state.currentScreen == "catalog") currentScreen = <Catalog/>;
    if (this.state.currentScreen == "catalog") currentScreen = <Checkout/>;
    if (this.state.currentScreen == "catalog") currentScreen = <Orders/>;
    if (this.state.currentScreen == "catalog") currentScreen = <Settings/>;
    if (this.state.currentScreen == "catalog") currentScreen = <Logout/>;
    return (
      <div class="dashboard">
        <div class="navpanel">
        </div>
        <div class="board">
         {currentScreen}
        </div>
      </div>
    );
  }
};

export default Dashboard;
