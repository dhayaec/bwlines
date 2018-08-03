import * as React from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import HeaderMenu from '../components/HeaderMenu';

interface ProductsProps {}

interface ProductsState {}

class Products extends React.Component<
  ProductsProps & RouteComponentProps,
  ProductsState
> {
  public render(): JSX.Element {
    return (
      <div>
        <HeaderMenu />
        <h1>Hello Products</h1>
        <h2>Welcome to my website</h2>
        <Link to="/product/123" children="Product 123" />
      </div>
    );
  }
}

export default Products;
