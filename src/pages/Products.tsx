import { Link, RouteComponentProps } from '@reach/router';
import * as React from 'react';
import HeaderMenu from '../components/HeaderMenu';
import products from '../data/products';

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
        <ul>
          {products.length > 0 &&
            products.map(item => (
              <li key={item.id}>
                <Link to={`/products/${item.id}`} children={item.name} />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Products;
