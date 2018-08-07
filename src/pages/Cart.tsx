import { RouteComponentProps } from '@reach/router';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import User from '../components/User';

interface CartProps {}
interface CartState {
  users: UserObject[];
}

class Cart extends React.Component<CartProps & RouteComponentProps, CartState> {
  state = {
    users: [
      { id: 1, name: 'Cory' },
      { id: 2, name: 'Meg' },
      { id: 3, name: 'Bob' },
      { id: 4, name: 'Nan' },
      { id: 5, name: 'Sam' },
    ],
  };

  renderUser = (user: UserObject) => {
    return <User key={user.id} user={user} onClick={this.deleteUser} />;
  }

  deleteUser = (id: number) => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== id),
      };
    });
  }

  render() {
    return (
      <div>
        <HeaderMenu />
        <h1>Users</h1>
        <ul>{this.state.users.map(this.renderUser)}</ul>
      </div>
    );
  }
}

export default Cart;
