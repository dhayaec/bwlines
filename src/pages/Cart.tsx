import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';

interface CartProps {}

interface CartState {}

class Cart extends React.Component<CartProps & RouteComponentProps, CartState> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>Cart Page</h1>
        <p>welcome</p>
      </div>
    );
  }
}

export default Cart;
