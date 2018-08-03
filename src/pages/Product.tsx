import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';

interface ProductProps {
  productId?: string;
}

interface ProductState {}

class Product extends React.Component<
  ProductProps & RouteComponentProps,
  ProductState
> {
  public render(): JSX.Element {
    const { productId } = this.props;
    return (
      <div>
        <HeaderMenu />
        <h1>product {productId}</h1>
      </div>
    );
  }
}

export default Product;
